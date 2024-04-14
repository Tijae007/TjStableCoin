const { expect } = require("chai");

describe("TjStableCoin contract", function () {
  let Token;
  let token;
  let owner;
  let addr1;
  let addr2;
  const initialSupply = ethers.utils.parseEther("1000000"); // Initial supply of tokens

  beforeEach(async function () {
    Token = await ethers.getContractFactory("TjStableCoin");
    [owner, addr1, addr2] = await ethers.getSigners();
    token = await Token.deploy(owner.address);
    await token.deployed();
  });

  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const ownerBalance = await token.balanceOf(owner.address);
    expect(await token.totalSupply()).to.equal(ownerBalance);
  });

  it("Should transfer tokens between accounts", async function () {
    await token.transfer(addr1.address, ethers.utils.parseEther("100"));
    expect(await token.balanceOf(addr1.address)).to.equal(ethers.utils.parseEther("100"));

    await token.connect(addr1).transfer(addr2.address, ethers.utils.parseEther("50"));
    expect(await token.balanceOf(addr2.address)).to.equal(ethers.utils.parseEther("50"));
  });

  it("Should emit Transfer events", async function () {
    await expect(token.transfer(addr1.address, ethers.utils.parseEther("100")))
      .to.emit(token, "Transfer")
      .withArgs(owner.address, addr1.address, ethers.utils.parseEther("100"));

    await expect(token.connect(addr1).transfer(addr2.address, ethers.utils.parseEther("50")))
      .to.emit(token, "Transfer")
      .withArgs(addr1.address, addr2.address, ethers.utils.parseEther("50"));
  });

  it("Should fail if sender doesn't have enough tokens", async function () {
    const initialOwnerBalance = await token.balanceOf(owner.address);

    await expect(
      token.connect(addr1).transfer(owner.address, ethers.utils.parseEther("1"))
    ).to.be.revertedWith("ERC20: transfer amount exceeds balance");

    expect(await token.balanceOf(owner.address)).to.equal(initialOwnerBalance);
  });
});

# TjStableCoin
**Distributed Ledger Technology &amp; Smart Contract course**

Token Contract Address - **0x2517791937Aec67958070E497B9aDDc581F7D0F6**

Network - **Sepolia test network**

Transaction ID from Sepolia Test network - **0xc27e4dea4384d6b951772a66bcedcc500d48754b8c0a2b1dc9e9792fb35909fa**

Etherscan - **https://sepolia.etherscan.io/token/0xb4e2747f54dcf84b4a81c6e0272d709c7dbe4599?a=0x2517791937aec67958070e497b9addc581f7d0f6**

Balance - **0.01TJ**



Tests

1. **Setup Hardhat**:
   - Ensure that you have Node.js and npm installed on your system.
   - Install Hardhat globally by running `npm install -g hardhat` if you haven't already done so.
   - Initialize a new Hardhat project in your project directory by running `npx hardhat init`.

2. **Install Dependencies**:
   - Install necessary dependencies for testing, including `@nomiclabs/hardhat-ethers`, `@nomiclabs/hardhat-waffle`, and `chai`. You can install them using npm:
     ```
     npm install @nomiclabs/hardhat-ethers @nomiclabs/hardhat-waffle chai
     ```

3. **Compile Contracts**:
   - Compile your Solidity contracts by running `npx hardhat compile`. This command compiles your contracts and generates artifacts in the `artifacts` directory.

4. **Run Tests**:
   - Execute the tests using `npx hardhat test`. This command runs the tests written in the `Token.test.js` file and reports the results.




The test script checks the functionality of the `TjStableCoin` contract in the Mocha and Chai framework for:

1. **Contract Deployment** (`beforeEach`):
   - Before each test case, the script deploys the `TjStableCoin` contract using `Token.deploy(owner.address)`, where `owner` is one of the signers obtained from `ethers.getSigners()`.
   - It ensures that the contract is deployed and ready for testing.

2. **Deployment Test**:
   - Verifies that the deployment assigns the total supply of tokens to the owner.
   - It checks if the balance of the owner matches the total supply returned by the contract.

3. **Token Transfer Test**:
   - Tests token transfers between accounts.
   - It transfers tokens from the owner to `addr1` and then from `addr1` to `addr2`, checking the resulting balances.

4. **Event Emission Test**:
   - Ensures that the contract emits `Transfer` events when tokens are transferred between accounts.
   - It checks if the emitted events contain the correct sender, recipient, and amount.

5. **Error Handling Test**:
   - Tests the scenario where a sender doesn't have enough tokens for a transfer.
   - It verifies that attempting to transfer tokens when the sender doesn't have enough balance reverts with the expected error message.


# TjStableCoin
Distributed Ledger Technology &amp; Smart Contract course

Token Contract Address - 0x2517791937Aec67958070E497B9aDDc581F7D0F6

Network - Sepolia test network

Transaction ID from Sepolia Test network - 0xc27e4dea4384d6b951772a66bcedcc500d48754b8c0a2b1dc9e9792fb35909fa

Etherscan - https://sepolia.etherscan.io/token/0xb4e2747f54dcf84b4a81c6e0272d709c7dbe4599?a=0x2517791937aec67958070e497b9addc581f7d0f6

Balance - 0.01TJ



Tests

The test script checks the functionality of the `TjStableCoin` contract for:

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

Overall, the test script covers key aspects of the contract's functionality, including deployment, token transfers, event emissions, and error handling. Make sure to run the tests using `npx hardhat test` and verify that they pass successfully.

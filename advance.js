import { ContractKit } from '@celo/contractkit';

// Celo network URL
const celoNetworkURL = '<your-celo-network-url>';

// Create a new ContractKit instance
const kit = ContractKit.newKit(celoNetworkURL);

// Connect to the Celo network
async function connectToCeloNetwork() {
  try {
    await kit.connection.connect();
    console.log('Connected to Celo network');
  } catch (error) {
    console.error('Failed to connect to Celo network:', error);
  }
}

connectToCeloNetwork();

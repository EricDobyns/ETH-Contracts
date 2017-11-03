module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*',
      gas: 4712388, // Default Amount
      gasPrice: 100000000000 // 100 Gwei (Shannon)
    }
  }
};

module.exports = {
  networks: {
    development: {
       host: "192.168.100.104",
       port: 7545, // Porta padrão em que o ganache utiliza
       network_id: "*"
    }
 }, 
  compilers: {
    solc: {
      version: "0.8.19",
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200      // Default: 200
        },
      }
    }
  }
};

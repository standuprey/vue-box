// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      from: '0xb99bb97607ee5a232ff32e542192080394599984',
      port: 8545,
      network_id: '*', // Match any network id
      gas: 470000
    }
  }
}

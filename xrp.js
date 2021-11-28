const xrpl = require('xrpl');
const server = 'http://localhost:6006'
const dotenv = require('dotenv')


const wallet = xrpl.Wallet.fromSeed('sn3nxiW7v8KXzPzAqzyHXbSSKNuN9')
console.log(wallet.address)


async function initialize() {

    const client = new xrpl.Client(server)

    await client.connect()

}


async function connect() {

  const api = new xrpl.Client('wss://xrplcluster.com');
  await api.connect();

  let response = await api.request({
    "command": "ledger",
    "ledger_index": "validated",
    "transactions": true
  });

}


async function payments() {

  const fund_result = await client.fundWallet()
  const test_wallet = fund_result.wallet

  console.log(fund_result)

}


initialize()
connect()
payments()

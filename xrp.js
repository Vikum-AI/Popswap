const xrpl = require("xrpl");
const dotenv = require("dotenv");

const server = "https://localhost:6006";
const wallet = xrpl.Wallet.fromSeed('sn3nxiW7v8KXzPzAqzyHXbSSKNuN9');

const fund_result = await client.fundWallet();
const test_wallet = fund_result.wallet;
const api = new xrpl.Client("wss://xrplcluster.com");

console.log(walley.address);
async initialize = () => await xrpl.Client(server).connect();
async payments = () => console.log(fund_result);
async connect = () => {
  await api.connect();
  let response  = await api.request({
    "command": "ledger",
    "ledger_index": "validated"
    "transactions": true
  });
}

initialize(); connect(); payments()

import React from 'react';
import './App.css';
import Header from './Components/header'
import Main from './Components/main'
import Textbox from './Components/textBox'
import Number from './Components/number'


function App() {
  return (
    <div className="App">
      
      <Header /> 
      <Main /> 
      <Number number='01' /> 
      <Textbox header='Choose the crypto exchange pair' content='Assuming you own Etherum (ETH) and want to swap it into Bitcoin (BTC), our job is to do it for you on PopSwap!'  /> 
      <Number number='02' /> 
      <Textbox header='Enter your crypto wallet address' content='Now you would need to enter the crypto wallet Bitcoin address. Be extremely careful and double-check your BTC address. Your Bitcoins will be sent to this address right after the exchange.' /> 
      <Number number='03' /> 
      <Textbox header='Done!' content='Now, you’ll have the amount of Bitcoins you exchanged in your wallet. Spend it or save it how you want!' /> 
     

    </div>
  );
}

export default App;

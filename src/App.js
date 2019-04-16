import React, { Component } from 'react';
import Header from './components/Header';
import OpenWidgetButton from './components/OpenWidgetButton';

import CurrencyLayer from './services/currencylayer';

class App extends Component {
  constructor() {
    super();
    this.printAllCurrency();
    this.printUSDCurrency();
    this.printEURCurrency();
    this.printRUBCurrency();
  }
  state = {
    currency: {},
  };

  printAllCurrency() {
    const currency = new CurrencyLayer();
    currency.getAllCurrencies().then((data) => console.log(data));
  }

  printUSDCurrency() {
    const currency = new CurrencyLayer();
    currency.getUSDCurrency().then((data) => console.log(data));
  }

  printEURCurrency() {
    const currency = new CurrencyLayer();
    currency.getEURCurrency().then((data) => console.log(data));
  }

  printRUBCurrency() {
    const currency = new CurrencyLayer();
    currency.getRUBCurrency().then((data) => console.log(data));
  }

  render() {
    return (
      <div id='app'>
        <Header />
        <OpenWidgetButton />
      </div>
    );
  }
}

export default App;

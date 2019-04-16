import React, { Component } from 'react';
import Header from './components/Header';
import WidgetContainer from './components/WidgetContainer';

import CurrencyLayer from './services/currencylayer';

class App extends Component {
  componentDidMount() {
    this.loadData();
    this.updateData();
  }

  updateData() {
    setInterval(() => this.loadData(), 15000);
  }

  loadData() {
    this.getUSDCurrency();
    this.getEURCurrency();
    this.getRUBCurrency();
  }

  state = {
    currency: {},
    USD: {},
    EUR: {},
    RUB: {},
  };

  getAllCurrency() {
    const currency = new CurrencyLayer();
    currency
      .getAllCurrencies()
      .then((data) => this.setState({ currency: data }));
  }

  getUSDCurrency() {
    const currency = new CurrencyLayer();
    currency.getUSDCurrencies().then((data) => this.setState({ USD: data }));
  }

  getEURCurrency() {
    const currency = new CurrencyLayer();
    currency.getEURCurrencies().then((data) => this.setState({ EUR: data }));
  }

  getRUBCurrency() {
    const currency = new CurrencyLayer();
    currency.getRUBCurrencies().then((data) => this.setState({ RUB: data }));
  }

  render() {
    return (
      <div id='app'>
        <Header />
        <div>USD: {Object.values(this.state.USD)}</div>
        <div>EUR: {Object.values(this.state.EUR)}</div>
        <div>RUB: {Object.values(this.state.RUB)}</div>
        <WidgetContainer />
      </div>
    );
  }
}

export default App;

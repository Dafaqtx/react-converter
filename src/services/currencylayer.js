class CurrencyLayer {
  _apiBase = 'http://apilayer.net/api';
  _apiKey = '17793dec281cda4014de31bb87f0c3e 3';

  async getResource(url) {
    const res = await fetch(
      `${this._apiBase}/live?access_key=${this._apiKey}&${url}`
    );

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}`);
    }
    return await res.json();
  }

  async getAllCurrencies() {
    const res = await this.getResource(`currencies=USD,EUR,RUB`);
    return res.quotes;
  }

  async getUSDCurrencies() {
    const res = await this.getResource(`currencies=USD`);
    return res.quotes;
  }

  async getEURCurrencies() {
    const res = await this.getResource(`currencies=EUR`);
    return res.quotes;
  }

  async getRUBCurrencies() {
    const res = await this.getResource(`currencies=RUB`);
    return res.quotes;
  }
}

export default CurrencyLayer;

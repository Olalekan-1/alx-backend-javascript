import Currency from './3-currency';

export default class Pricing extends Currency {
  constructor(amount, currency) {
    super(currency._code, currency._name);

    if (typeof amount === 'number') {
      this._amount = amount;
    } else {
      throw new TypeError('amount must be a number.');
    }

    if (!(currency instanceof Currency)) {
      throw new TypeError('currency must be a currency.');
    }
    this._currency = currency;
  }

  get currency() {
    return this._currency;
  }

  set currency(newcurrency) {
    if (newcurrency instanceof Currency) {
      this._currency = newcurrency;
    } else {
      throw new TypeError('currency must be a currency.');
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(newamount) {
    if (typeof newamount === 'number') {
      this._amount = newamount;
    } else {
      throw new TypeError('amount must be a number.');
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._name} (${this._code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number.');
    }

    if (typeof conversionRate !== 'number') {
      throw new TypeError('amount must be a number.');
    }
    return amount * conversionRate;
  }
}

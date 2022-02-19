export class Rate {
  currency: string;
  value: number;
  code: string;

  constructor(currency: string, value: number, code:string) {
    this.currency = currency;
    this.value = value;
    this.code = code;
  }
}

import {Rate} from "./rate";

export class Rates {
  date: Date;
  listOfRates: Rate[];

  constructor(date: Date, listOfRates: Rate[]) {
    this.date = date;
    this.listOfRates = listOfRates;
  }
}

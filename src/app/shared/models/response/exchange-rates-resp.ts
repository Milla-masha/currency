import {RateResp} from "./rate-resp";

export interface ExchangeRatesResp {
  table: string;
  no: string;
  effectiveDate: string;
  rates: RateResp[];
}

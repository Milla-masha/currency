import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ExchangeRatesResp} from "../shared/models/response/exchange-rates-resp";
import {map} from "rxjs/operators";
import {Rates} from "../shared/models/viewModel/rates";
import {Observable} from "rxjs";
import {Rate} from "../shared/models/viewModel/rate";
import {DatePipe} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class RateService {

  private baseUrl = 'https://api.nbp.pl/api/exchangerates/tables/A/';

  constructor(private http: HttpClient, private datePipe: DatePipe) {
  }

  getCurrentCurrencies(): Observable<Rates> {
    return this.http.get<ExchangeRatesResp[]>(this.baseUrl + '?format=json'
    )
      .pipe(
        map(exchangeRates => {
          return exchangeRates.map(exchangeRate => {
            return this.mapRatesRespToView(exchangeRate);
          })[0]
        }))
  }

  getCurrenciesByDate(date: Date): Observable<Rates> {
    return this.http.get<ExchangeRatesResp[]>(this.baseUrl + this.datePipe.transform(date, "yyyy-MM-dd") + '/?format=json'
    )
      .pipe(
        map(exchangeRates => {
          return exchangeRates.map(exchangeRate => {
            return this.mapRatesRespToView(exchangeRate);
          })[0]
        }))
  }

  mapRatesRespToView(exchangeRate: ExchangeRatesResp): Rates {
    return {
      date: new Date(exchangeRate.effectiveDate),
      listOfRates: exchangeRate.rates.map(reteEl => {
        return {
          currency: reteEl.currency,
          value: reteEl.mid,
          code: reteEl.code,
        } as Rate
      })
    } as Rates
  }

}

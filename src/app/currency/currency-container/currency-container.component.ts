import {Component, OnDestroy, OnInit} from '@angular/core';
import {RateService} from "../rate.service";
import {Rates} from "../../shared/models/viewModel/rates";
import {Subscription} from "rxjs";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-currency-container',
  templateUrl: './currency-container.component.html',
  styleUrls: ['./currency-container.component.css']
})
export class CurrencyContainerComponent implements OnInit, OnDestroy {

  dateValue: Date;
  rates: Rates;
  currentCurrenciesSubscr: Subscription;
  currenciesByDateSubscr: Subscription;
  error: string = null;

  constructor(private route: ActivatedRoute, private dataStorageService: RateService) {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['date']) {
        const date = new Date(params['date']);
        if (date.toString() !== "Invalid Date") {
          this.dateValue = date;
          this.currenciesByDateSubscr = this.dataStorageService.getCurrenciesByDate(this.dateValue).subscribe(rates => {
            this.rates = rates;
            this.error = null;
          }, error => {
            this.rates = null;
            this.error = error.statusText;
          });
        } else {
          this.error = 'Ivalid Date';
        }
      } else {
        this.currentCurrenciesSubscr = this.dataStorageService.getCurrentCurrencies().subscribe(rates => {
          this.rates = rates;
          this.error = null;
        }, error => {
          this.rates = null;
          this.error = error.statusText;
        });
        this.dateValue = new Date();
      }
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.currentCurrenciesSubscr.unsubscribe();
    this.currenciesByDateSubscr.unsubscribe();
  }
}

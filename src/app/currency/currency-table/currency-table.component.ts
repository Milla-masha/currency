import {Component, Input, OnInit} from '@angular/core';
import {Rates} from "../../shared/models/viewModel/rates";
import {Table} from "primeng/table";
import {DatePipe} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.css']
})
export class CurrencyTableComponent implements OnInit {

  @Input()
  rates: Rates;
  @Input()
  errorMessage: string
  dateValue: any;

  constructor(private router: Router, public datepipe: DatePipe) {
  }

  ngOnInit(): void {
  }

  clear(table: Table) {
    table.clear();
  }

  choseDate(date: Date) {
    if (date instanceof Date) {
      this.dateValue = date;
      this.router.navigate(['/currency'], {queryParams: {'date': this.datepipe.transform(this.dateValue, 'yyyy-MM-dd')}});
    } else {
      this.errorMessage = 'Ivalid Date';
    }
  }
}

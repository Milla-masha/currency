import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CurrencyRouting} from "./currency-routing";
import { CurrencyTableComponent } from './currency-table/currency-table.component';
import { CurrencyContainerComponent } from './currency-container/currency-container.component';
import {CalendarModule} from "primeng/calendar";
import {FormsModule} from "@angular/forms";
import {TableModule} from "primeng/table";
import {MessageModule} from "primeng/message";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    CurrencyTableComponent,
    CurrencyContainerComponent
  ],
  imports: [
    CommonModule,
    CurrencyRouting,
    CalendarModule,
    FormsModule,
    TableModule,
    MessageModule,
    SharedModule
  ]
})
export class CurrencyModule { }

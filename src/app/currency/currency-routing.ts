import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CurrencyContainerComponent} from "./currency-container/currency-container.component";

const routes: Routes = [
  {path: '', component: CurrencyContainerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencyRouting {

}

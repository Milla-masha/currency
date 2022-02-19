import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./ui/page-not-found/page-not-found.component";

const routes: Routes = [
  {path: '', redirectTo: 'currency', pathMatch: 'full'},
  {path: 'currency', loadChildren: () => import('./currency/currency.module').then(m => m.CurrencyModule)},
  {path: '**', pathMatch: 'full', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ThemesSwitcherComponent} from "./components/themes-switcher/themes-switcher.component";
import {SelectButtonModule} from "primeng/selectbutton";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ThemesSwitcherComponent
  ],
  imports: [
    CommonModule,
    SelectButtonModule,
    FormsModule
  ],
  exports: [
    ThemesSwitcherComponent,
    SelectButtonModule,
    CommonModule
  ]
})
export class SharedModule { }

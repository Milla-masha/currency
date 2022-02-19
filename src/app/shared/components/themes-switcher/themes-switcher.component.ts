import { Component, OnInit } from '@angular/core';
import {ThemeService} from "../../services/theme.service";

@Component({
  selector: 'app-themes-switcher',
  templateUrl: './themes-switcher.component.html',
  styleUrls: ['./themes-switcher.component.css']
})
export class ThemesSwitcherComponent implements OnInit {

  themes = [
    {name: 'Ciemny', value: 'dark-indigo'},
    {name: 'Jasny', value: 'bootstrap4-light-blue'}

  ];
  selectedTheme: string = 'bootstrap4-light-blue';

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
  }

  selectTheme(theme: any) {
    this.themeService.switchTheme(theme.value);
  }
}

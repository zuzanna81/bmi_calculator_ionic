import { CalculatorPage } from '../calculator/calculator'
import { Component } from '@angular/core';

import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  calculatorTab = CalculatorPage;
  aboutTab = AboutPage;

  constructor() {

  }
}

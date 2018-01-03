# Zuzanna's BMI Calculator Ionic

## at CraftAcademy bootcamp week 7

**Assignment**

The purpose of this assignment is to build a mobile version of the BMI Calculator, a small web application built in JavaScript during week 2 of the bootcamp.

**Setting up environment**
1. You need to have Node.js installed on your computer
* If Node is already installed check the version by running `node -v`in your terminal
2. Run `npm install -g cordova ionic`to install the latest Cordova and Ionic command-line tools
3. Run `npm -g install ios-sim` to install iOS simulator
4. Make sure you have Xcode installed on your system
5. Navigate to the folder where you want to create your project
* Run `ionic start bmi_calculator tabs`
* `cd bmi_calculator`
* Run `ionic cordova platform add ios` (if you're on macOS) or
* `ionic cordova platform add android` (if you need to publish for android)
6. Create a new repository on GitHub and add it as a remote to your project
7. Run `ionic serve --lab` to start a local server and run the application
8. Check the application in the browser window

**Cleaning up the structure**

1. Create a new branch `git checkout -b calculator`, open it in your text editor (`atom .`)
2. Delete `home` and `contact` from **src/pages**
3. Delete `HomePage` and `ContactPage` from `declarations`, `entryComponents` and `import` from **src/app.module.ts**
4. Delete `HomePage` and `ContactPage` from **src/pages/tabs.ts**
5. Delete `tab1Root`and `tab3Root`from **src/pages/tabs.html**
6. Add, commit and push your changes to GitHub

## How to build some basic functionality in the Ionic application?

**Adding a page**
1. Run `ionic g page calculator`
2. In **app.module.ts** add the following line at the top:
```
import { CalculatorPage } from '../pages/calculator/calculator'
```
* Add `CalculatorPage` to the `declarations` and `entryComponents` properties too
3. In **src/pages/tabs/tabs.ts** import `CalculatorPage`, add:
```
// Add import statement at top of the file
import { CalculatorPage } from '../calculator/calculator'


export class TabsPage {
  calculatorTab = CalculatorPage; // Create a calculator's tab
  aboutTab = AboutPage            // Rename tab2Root to aboutTab
  ...
}
```
4. Edit **tabs.html** template, modify the file:
```
<!-- Your tabs.html file content should be updated to the following -->
<ion-tabs>
  <ion-tab [root]="calculatorTab" tabTitle="Calculator" tabIcon="calculator"></ion-tab>
  <ion-tab [root]="aboutTab" tabTitle="About" tabIcon="information-circle"></ion-tab>
</ion-tabs>
```

**Adding functionality**

1. In **calculator.html** template add a form:
```
<!-- type the following content inside <ion-content> tag -->
<ion-list>
  <ion-item>
    <ion-label floating>Weight (kg)</ion-label>
    <ion-input type="number" [(ngModel)]="weight"></ion-input>
  </ion-item>

  <ion-item>
    <ion-label floating>Height (cm)</ion-label>
    <ion-input type="number" [(ngModel)]="height"></ion-input>
  </ion-item>
</ion-list>

<div padding>
  <button block ion-button (click)="calculateBMI()">Calculate</button>
</div>
```
2. In **scr/pages/calculator/calculator.ts**:
* create 2 variables:
```
// src/pages/calculator/calculator.ts
// Edit your file to have the following code

import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
})
export class CalculatorPage {
  height: number;
  weight: number;

  constructor() {
  }

  calculateBMI() {
    // Add logic to calculate BMI here
  }
}
```
* add 2 extra variables in:
```
export class CalculatorPage {
  ...
  bmiValue: number;
  bmiMessage: string;

  ...
}
```
3. and add the following implementation of the **calculateBMI** function:
```
...

calculateBMI() {
  if (this.weight > 0 && this.height > 0) {
    let finalBmi = this.weight / (this.height / 100 * this.height / 100);
    this.bmiValue = parseFloat(finalBmi.toFixed(2));
    this.setBMIMessage();
  }
}

// setBMIMessage will set the text message based on the value of BMI
private setBMIMessage() {
  if (this.bmiValue < 18.5) {
    this.bmiMessage = "Underweight"
  }

  if (this.bmiValue > 18.5 && this.bmiValue < 25) {
    this.bmiMessage = "Normal"
  }

  if (this.bmiValue > 25 && this.bmiValue < 30) {
    this.bmiMessage = "Overweight"
  }

  if (this.bmiValue > 30) {
    this.bmiMessage = "Obese"
  }
}

...
```
4. Add the following snippet to **src/pages/calculator/calculator.html**:
```
<ion-content> <!-- this line is just here to indicate where to type the following block -->
  ...

  <ion-card *ngIf="bmiValue">
    <ion-card-header>
      BMI Calculation
    </ion-card-header>
    <ion-card-content>
      <p>Person: Weight {{this.weight}} kg, Height {{this.height}} cm</p>
      <p>BMI: {{bmiValue}}</p>
      <p><strong>You are {{bmiMessage}}</strong></p>
    </ion-card-content>
  </ion-card>
</ion-content> <!-- this line is just here to indicate where to type the following block -->
```

## How to view your Ionic App on your device?

**Resources**

CraftAcademy course material (week 7)

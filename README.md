# Zuzanna's BMI Calculator Ionic

## at CraftAcademy bootcamp week 7

**Assignment**

The purpose of this assignment is to build a mobile version of the BMI Calculator, a small web application built in JavaScript during week 2.

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
7. Run `ionic serve --lab` to start a loacl server and run the application
8. Check the application in the browssr window

**Cleaning up the structure**

1. Create a new branch `git checkout -b calculator`, open it in your text editor
2. Delete `home` and `contact` from src/pages
3. Delete `HomePage` and `ContactPage` from `declarations`, `entryComponents` and `import` in src/app.module.ts
4. Delete `HomePage` and `ContactPage` from src/pages/tabs.ts
5. Delete `tab1Root`and `tab3Root`from src/pages/tabs.html
6. Add, commit and push your changes to GitHub

**Adding a page**
1. Run `ionic g page calculator`
2. In app.module.ts add the following line at the top:
```
import { CalculatorPage } from '../pages/calculator/calculator'
```
3. Add `CalculatorPage` to the `declarations` and `entryComponents` properties
4. In src/pages/tabs/tabs.ts import `CalculatorPage`, add:
```
// Add import statement at top of the file
import { CalculatorPage } from '../calculator/calculator'


export class TabsPage {
  calculatorTab = CalculatorPage; // Create a calculator's tab
  aboutTab = AboutPage            // Rename tab2Root to aboutTab
  ...
}
```
5. Edit tabs.html template, modify:
```
<!-- Your tabs.html file content should be updated to the following -->
<ion-tabs>
  <ion-tab [root]="calculatorTab" tabTitle="Calculator" tabIcon="calculator"></ion-tab>
  <ion-tab [root]="aboutTab" tabTitle="About" tabIcon="information-circle"></ion-tab>
</ion-tabs>
```

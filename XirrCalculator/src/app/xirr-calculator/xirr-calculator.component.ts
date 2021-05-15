import { Component, OnInit } from '@angular/core';
import { xirr, CashFlow } from "@webcarrot/xirr";

@Component({
  selector: 'app-xirr-calculator',
  templateUrl: './xirr-calculator.component.html',
  styleUrls: ['./xirr-calculator.component.sass']
})
export class XirrCalculatorComponent implements OnInit {

  rate: number = 0.0;
  cashFlows: CashFlow[] = [];

  txtAmount: number = 0;
  txtDate: string = "";


  constructor() { }

  ngOnInit(): void {
  }

  addTransaction() {
    this.cashFlows.push(
      {
        amount: this.txtAmount, 
        date: new Date(this.txtDate)},
    );

    this.txtAmount = 0;
    this.txtDate = "";
  }

  getXirrCalculation()
  {
    this.rate = xirr(this.cashFlows)*100;
  }

  clear() {
    this.cashFlows = [];
    this.rate = 0;
  }
 
}

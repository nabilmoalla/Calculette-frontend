import { Component, OnInit } from '@angular/core';
import {CalculatorService} from "../service/calculator.service";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  displayedValue: string = ''
  operator: string  = ''
  constructor(private calculatorService: CalculatorService) { }

  ngOnInit(): void {
  }

  clearScreen() {
    this.displayedValue = '';
  }

  display(s: string) {
  this.displayedValue += s;
  }

  calculate() {
    if(this.displayedValue.includes(this.operator) && this.operator !== ''){
      const firstParam = this.displayedValue.split(this.operator)[0];
      const secondParam = this.displayedValue.split(this.operator)[1];
      switch(this.operator) {
        case '+':
          this.calculatorService.add(firstParam, secondParam).subscribe(value => {
            this.displayedValue = value.toString()
          });
          break;
        case '-':
          this.calculatorService.substract(firstParam, secondParam).subscribe(value => {
            this.displayedValue = value.toString()
          });
          break;
        case '*':
          this.calculatorService.multiply(firstParam, secondParam).subscribe(value => {
            this.displayedValue = value.toString()
          });
          break;
        case '/':
          this.calculatorService.divide(firstParam, secondParam).subscribe(value => {
            this.displayedValue = value.toString()
          });
          break;
        default:
          this.displayedValue = '';
      }

    }
  }

  setOperator(operator: string) {
    this.operator = operator;
    this.displayedValue += this.operator
  }
}

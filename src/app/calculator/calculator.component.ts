import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  public result: any = 0;
  @Input() firstNumber = 0;
  @Input() secondNumber = 0;
  @Output() calculationPerformed = new EventEmitter<number|string>();

  public add() {
    this.result = this.firstNumber + this.secondNumber;
    this.calculationPerformed.emit(this.result);
  }

  public substract() {
    this.result = this.firstNumber - this.secondNumber;
    this.calculationPerformed.emit(this.result);
  }

  public multiply() {
    this.result = this.firstNumber * this.secondNumber;
    this.calculationPerformed.emit(this.result);
  }

  public divide() {
    if (this.secondNumber !== 0) {
      this.result = this.firstNumber / this.secondNumber;
      this.calculationPerformed.emit(this.result);
    } else {
      this.result = 'Error';
      this.calculationPerformed.emit(this.result);
    }
  }
}

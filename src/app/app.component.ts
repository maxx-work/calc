import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstNumber = 0;
  secondNumber = 0;
  result: any = 0;

  add() {
    this.result = this.firstNumber + this.secondNumber;
  }

  substract() {
    this.result = this.firstNumber - this.secondNumber;
  }

  multiply() {
    this.result = this.firstNumber * this.secondNumber;
  }

  divide() {
    if (this.secondNumber !== 0) {
      this.result = this.firstNumber / this.secondNumber;
    } else {
      alert('Dividing by 0');
      this.result = 'Error';
    }
  }
}

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

  public add() {
    this.result = this.firstNumber + this.secondNumber;
  }

  public substract() {
    this.result = this.firstNumber - this.secondNumber;
  }

  public multiply() {
    this.result = this.firstNumber * this.secondNumber;
  }

  public divide() {
    if (this.secondNumber !== 0) {
      this.result = this.firstNumber / this.secondNumber;
    } else {
      alert('Dividing by 0');
      this.result = 'Error';
    }
  }
}

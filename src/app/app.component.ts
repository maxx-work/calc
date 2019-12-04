import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public calculatorResult: number|string = 0;

  public receiveResult(result: number|string) {
    this.calculatorResult = result;
  }
}

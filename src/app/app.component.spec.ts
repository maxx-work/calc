import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('Calc', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        FormsModule
      ],
    });
  }));

  beforeEach( () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    component.firstNumber = 12;
    component.secondNumber = 4;
  });

  describe('basic', () => {
    it(`should add numbers`, () => {
      component.add();
      expect(component.result).toEqual(16);
    });

    it(`should substract numbers`, () => {
      component.substract();
      expect(component.result).toEqual(8);
    });

    it(`should multiply numbers`, () => {
      component.multiply();
      expect(component.result).toEqual(48);
    });

    it(`should divide numbers`, () => {
      component.divide();
      expect(component.result).toEqual(3);
    });

    it(`shouldn't divide by zero`, () => {
      component.secondNumber = 0;
      component.divide();
      expect(component.result).toEqual('Error');
    });
  });
});

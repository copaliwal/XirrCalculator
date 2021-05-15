import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XirrCalculatorComponent } from './xirr-calculator.component';

describe('XirrCalculatorComponent', () => {
  let component: XirrCalculatorComponent;
  let fixture: ComponentFixture<XirrCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XirrCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XirrCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaformComponent } from './pizzaform.component';

describe('PizzaformComponent', () => {
  let component: PizzaformComponent;
  let fixture: ComponentFixture<PizzaformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

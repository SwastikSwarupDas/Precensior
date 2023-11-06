import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmcoffeeComponent } from './bmcoffee.component';

describe('BmcoffeeComponent', () => {
  let component: BmcoffeeComponent;
  let fixture: ComponentFixture<BmcoffeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BmcoffeeComponent]
    });
    fixture = TestBed.createComponent(BmcoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

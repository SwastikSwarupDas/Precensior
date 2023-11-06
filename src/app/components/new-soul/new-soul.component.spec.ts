import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSoulComponent } from './new-soul.component';

describe('NewSoulComponent', () => {
  let component: NewSoulComponent;
  let fixture: ComponentFixture<NewSoulComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewSoulComponent]
    });
    fixture = TestBed.createComponent(NewSoulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

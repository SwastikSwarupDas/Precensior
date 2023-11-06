import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomelanderComponent } from './homelander.component';

describe('HomelanderComponent', () => {
  let component: HomelanderComponent;
  let fixture: ComponentFixture<HomelanderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomelanderComponent]
    });
    fixture = TestBed.createComponent(HomelanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

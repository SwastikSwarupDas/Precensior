import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresencesComponent } from './presences.component';

describe('PresencesComponent', () => {
  let component: PresencesComponent;
  let fixture: ComponentFixture<PresencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresencesComponent]
    });
    fixture = TestBed.createComponent(PresencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
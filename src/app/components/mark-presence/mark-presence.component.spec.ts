import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkPresenceComponent } from './mark-presence.component';

describe('MarkPresenceComponent', () => {
  let component: MarkPresenceComponent;
  let fixture: ComponentFixture<MarkPresenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarkPresenceComponent]
    });
    fixture = TestBed.createComponent(MarkPresenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

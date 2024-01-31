import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentGraphComponent } from './appointment-graph.component';

describe('AppointmentGraphComponent', () => {
  let component: AppointmentGraphComponent;
  let fixture: ComponentFixture<AppointmentGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppointmentGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppointmentGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

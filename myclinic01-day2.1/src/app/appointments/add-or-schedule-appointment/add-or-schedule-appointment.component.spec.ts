import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrScheduleAppointmentComponent } from './add-or-schedule-appointment.component';

describe('AddOrScheduleAppointmentComponent', () => {
  let component: AddOrScheduleAppointmentComponent;
  let fixture: ComponentFixture<AddOrScheduleAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddOrScheduleAppointmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddOrScheduleAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

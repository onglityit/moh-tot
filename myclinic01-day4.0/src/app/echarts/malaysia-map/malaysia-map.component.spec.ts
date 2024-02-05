import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MalaysiaMapComponent } from './malaysia-map.component';

describe('MalaysiaMapComponent', () => {
  let component: MalaysiaMapComponent;
  let fixture: ComponentFixture<MalaysiaMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MalaysiaMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MalaysiaMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component } from '@angular/core';
@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.scss'
})
export class AppointmentsComponent {
  hideSidebar = false;
	toggleSideBar(e: any) {
		this.hideSidebar = e;
	}
}
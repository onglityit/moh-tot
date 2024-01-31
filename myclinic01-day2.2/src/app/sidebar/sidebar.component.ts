import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() public hideSidebar: boolean = false;
  @Output() toggleSideBar = new EventEmitter();
  constructor(private router: Router){}
  toggle() {
    this.hideSidebar = !this.hideSidebar;
    this.toggleSideBar.emit(this.hideSidebar);
  }
  goToHome(){
    this.router.navigate(['/view/home']);
  }
}
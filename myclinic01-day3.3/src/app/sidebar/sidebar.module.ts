import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule],
  exports: [SidebarComponent],
  declarations: [SidebarComponent],
  providers: []
})
export class SidebarModule { }
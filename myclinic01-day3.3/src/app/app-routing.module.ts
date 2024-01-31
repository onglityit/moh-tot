import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'view', loadChildren: () => import('./view/view.module').then(m => m.ViewModule) },
  { path: 'appointments', loadChildren: () => import('./appointments/appointments.module').then(m => m.AppointmentsModule) },
  { path: 'patients', loadChildren: () => import('./patients/patients.module').then(m => m.PatientsModule) },
  { path: 'echarts', loadChildren: () => import('./echarts/echarts.module').then(m => m.EchartsModule)},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
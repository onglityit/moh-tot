import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3007';
  constructor(private http: HttpClient) {}
  addAppointment(appointmentData: any): Observable<any> {
    const url = `${this.apiUrl}/appointments`;
    return this.http.post(url, appointmentData);
  }
  getAllAppointments(): Observable<any[]> {
    const url = `${this.apiUrl}/appointments`;
    return this.http.get<any[]>(url);
  }
  getAppointmentById(appointmentId: string): Observable<any> {
    const url = `${this.apiUrl}/appointments?appointmentId=${appointmentId}`;
    return this.http.get(url);
  }
  updateAppointmentById(id:string, appointmentData: any): Observable<any> {
    const url = `${this.apiUrl}/appointments/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = { headers };
    return this.http.put(url, appointmentData, options);
  }
}

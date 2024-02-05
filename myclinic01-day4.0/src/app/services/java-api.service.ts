import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JavaApiService {
  private apiUrl = '';
  constructor(private http: HttpClient) {}
  searchPatientsById(id:string):Observable<any> {
    const url = `${this.apiUrl}/patient/${id}`;
    return this.http.get<any>(url);
  }
}

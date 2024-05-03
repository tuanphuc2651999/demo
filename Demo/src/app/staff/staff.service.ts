import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Staff } from './staff.types';


const apiUrl = 'https://localhost:7159/api/Staff/';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private httpClient: HttpClient) { }

  getData(search: string): Observable<Staff[]> {
    return this.httpClient.get<Staff[]>(apiUrl + "?search=" + search).pipe()
  }

  getById(id: number): Observable<Staff> {
    return this.httpClient.get<Staff>(apiUrl + id).pipe()
  }

  create(staff: Staff) {
    return this.httpClient.post(apiUrl, staff).pipe()
  }

  update(id: number, staff: Staff) {
    return this.httpClient.put(apiUrl + id, staff).pipe()
  }

  delete(id: number) {
    return this.httpClient.delete(apiUrl + id).pipe()
  }

}
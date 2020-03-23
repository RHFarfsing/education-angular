import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Major } from './major.class';
const url: string = "http://localhost:5000/api/majors";
@Injectable({
  providedIn: 'root'
})
export class MajorService {
  list(): Observable<Major[]>{
    return this.http.get(`${url}`) as Observable<Major[]>;
  }
  constructor(
    private http: HttpClient
  ) { }
}

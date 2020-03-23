import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student.class';
const url: string = "http://localhost:5000/api/students";
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  list(): Observable<Student[]>{
    return this.http.get(`${url}`) as Observable<Student[]>;
  }
  constructor(
    private http: HttpClient
  ) { }
}

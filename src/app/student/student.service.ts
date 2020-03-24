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
  get(id: any): Observable<Student>{
    return this.http.get(`${url}/${id}`) as Observable<Student>;
  }
  create(student: Student): Observable<Student>{
    return this.http.post(`${url}`, student) as Observable<Student>;
  }
  change(student: Student): Observable<Student>{
    return this.http.put(`${url}/${student.id}`, student) as Observable<Student>;
  }
  remove(student: Student): Observable<Student>{
    return this.http.delete(`${url}/${student.id}`) as Observable<Student>;
  }
  constructor(
    private http: HttpClient
  ) { }
}

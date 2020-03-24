import { Component, OnInit } from '@angular/core';
import { Student } from '../student.class';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  student: Student = new Student();
  save():void{
    this.studentsvc.create(this.student).subscribe(
      res=>{
        console.debug("Student created", res);
        this.router.navigateByUrl("/students/list");
      },
      err=>{
        console.error("CREATION ERROR", err);
      }
    );
  }

  constructor(
    private studentsvc: StudentService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}

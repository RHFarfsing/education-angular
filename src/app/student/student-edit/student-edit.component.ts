import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student.class';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  save(): void{
    this.studentsvc.change(this.student).subscribe(
      res=>{
        console.debug("Student change successfull", res);
        this.router.navigateByUrl("/students/list");
      },
      err=>{
        console.error("Error changing student", err);
      }      
    );
  }
  student: Student = new Student();
  constructor(
    private studentsvc: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.studentsvc.get(id).subscribe(
      res=>{
        this.student = res;
        console.debug("Student", res);
      },
      err=>{
        console.error("Error editing student", err);
      }
    );
  }

}

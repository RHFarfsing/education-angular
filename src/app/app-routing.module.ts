import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MajorListComponent } from './major/major-list/major-list.component';
import { MajorDetailComponent } from './major/major-detail/major-detail.component';
import { MajorCreateComponent } from './major/major-create/major-create.component';
import { MajorEditComponent } from './major/major-edit/major-edit.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { StudentCreateComponent } from './student/student-create/student-create.component';
import { StudentEditComponent } from './student/student-edit/student-edit.component';


const routes: Routes = [
  {path:'', redirectTo:'/majors/list', pathMatch:'full'},
  {path:'majors/list', component: MajorListComponent},
  {path:'majors/detail', component: MajorDetailComponent},
  {path:'majors/create', component: MajorCreateComponent},
  {path:'majors/edit', component: MajorEditComponent},
  {path:'students/list', component: StudentListComponent},
  {path:'students/detail', component: StudentDetailComponent},
  {path:'students/create', component: StudentCreateComponent},
  {path:'students/edit', component: StudentEditComponent},
  {path:'**', component: MajorListComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

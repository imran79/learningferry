import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CreateOrEditCoursesComponent } from './create-or-edit-courses/create-or-edit-courses.component';



const appRoutes: Routes = [

  {
    path: '', component: AllCoursesComponent, children: [
      { path: 'editCourse', component: CreateOrEditCoursesComponent },
      { path: 'courseDetails', component: CourseDetailsComponent }
    ]
  }

];

export const coursesRouting = RouterModule.forChild(appRoutes);

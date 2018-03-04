import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CreateOrEditCoursesComponent } from './create-or-edit-courses/create-or-edit-courses.component';
import { coursesRouting } from './courses.routing';

@NgModule({
  imports: [
    CommonModule,
    coursesRouting

  ],
  declarations: [AllCoursesComponent, CourseDetailsComponent, CreateOrEditCoursesComponent]
})
export class CoursesModule { }

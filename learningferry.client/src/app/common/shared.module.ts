import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './_directives/_alert/index';
import { EditorComponent } from './_directives/editor/editor.component';
import { QuillEditorModule } from 'ngx-quill-editor';
import { AllTutorialsComponent } from './component/tutorials/all-tutorials/all-tutorials.component';
import { TutorialDetailsComponent } from './component/tutorials/tutorial-details/tutorial-details.component';
import { AllCoursesComponent } from './component/courses/all-courses/all-courses.component';
import { CourseDetailsComponent } from './component/courses/course-details/course-details.component';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    QuillEditorModule
  ],
  declarations: [EditorComponent, AllTutorialsComponent, TutorialDetailsComponent, AllCoursesComponent, CourseDetailsComponent],
  exports: [EditorComponent]

})
export class SharedModule { }

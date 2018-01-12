import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './_directives/_alert/index';
import { EditorComponent } from './_directives/editor/editor.component';
import { QuillEditorModule } from 'ngx-quill-editor';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    QuillEditorModule
  ],
  declarations: [EditorComponent],
  exports: [EditorComponent]

})
export class SharedModule { }

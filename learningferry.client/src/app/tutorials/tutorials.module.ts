import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialDetailsComponent } from './tutorial-details/tutorial-details.component';
import { AllTutorialsComponent } from './all-tutorials/all-tutorials.component';
import { CreateOrEditTutorialsComponent } from './create-or-edit-tutorials/create-or-edit-tutorials.component';
import { tutorialsRouting } from './tutorials.routing';

@NgModule({
  imports: [
    CommonModule,
    tutorialsRouting

  ], declarations: [TutorialDetailsComponent, AllTutorialsComponent, CreateOrEditTutorialsComponent]

})
export class TutorialsModule { }

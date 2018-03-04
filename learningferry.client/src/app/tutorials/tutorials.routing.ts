import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllTutorialsComponent } from './all-tutorials/all-tutorials.component';
import { TutorialDetailsComponent } from './tutorial-details/tutorial-details.component';
import { CreateOrEditTutorialsComponent } from './create-or-edit-tutorials/create-or-edit-tutorials.component';

const appRoutes: Routes = [

    {
        path: '', component: AllTutorialsComponent, children: [
            { path: 'editTutorial', component: CreateOrEditTutorialsComponent },
            { path: 'tutorialDetails', component: TutorialDetailsComponent }
        ]
    }

];

export const tutorialsRouting = RouterModule.forChild(appRoutes);

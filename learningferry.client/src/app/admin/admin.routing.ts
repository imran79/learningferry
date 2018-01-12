import { Routes, RouterModule } from '@angular/router';
import { CreateoreditcourseComponent } from './createoreditcourse/createoreditcourse.component';
import { CreateOrEditTutorialsComponent } from './create-or-edit-tutorials/create-or-edit-tutorials.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AdminComponent } from './admin.component';

const appRoutes: Routes = [

   { path: '', component: AdminComponent, children: [
   { path: 'editCourse', component: CreateoreditcourseComponent },
    { path: 'editTutorials', component: CreateOrEditTutorialsComponent }
  ] }
   /* { path: '', component: AdminComponent },
    { path: 'editCourse', component: CreateoreditcourseComponent ,outlet : 'sub'},
    { path: 'editTutorials', component: CreateOrEditTutorialsComponent,outlet:'sub' }*/
];

export const adminRouting = RouterModule.forChild(appRoutes);

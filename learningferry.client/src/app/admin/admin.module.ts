import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { adminRouting } from './admin.routing';
import { CustomMaterialModule } from '../custom.material.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../common/shared.module';
import { CreateoreditcourseComponent } from './createoreditcourse/createoreditcourse.component';
import { CreateOrEditTutorialsComponent } from './create-or-edit-tutorials/create-or-edit-tutorials.component';
import { SideBarComponent } from './side-bar/side-bar.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    adminRouting,
    CustomMaterialModule

  ],
  declarations: [AdminComponent, CreateoreditcourseComponent, CreateOrEditTutorialsComponent, SideBarComponent]
})
export class AdminModule { }

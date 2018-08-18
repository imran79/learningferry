import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./containers/layouts/app.component";
import { NavItemComponent } from "./components/layouts/nav-Item.component";
import { SidenavComponent } from "./components/layouts/sidenav.component";
import { ToolbarComponent } from "./components/layouts/toolbar.component";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavHeaderComponent } from "./components/layouts/nav-header.component";

export const COMPONENTS = [
  AppComponent,
  NavItemComponent,
  SidenavComponent,
  ToolbarComponent,
  NavHeaderComponent
];

@NgModule({
  imports: [CommonModule, RouterModule, BrowserModule, BrowserAnimationsModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule
    };
  }
}

import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/index";

//import { RegisterComponent } from './register/index';
import { AuthGuard } from "./_guards/index";
import { CoursesModule } from "./courses/courses.module";
import { TutorialsModule } from "./tutorials/tutorials.module";
import { SearchComponent } from "./search/search.component";
import { HeaderComponent } from "./header/header.component";
import { AdminModule } from "./admin/admin.module";
import { AuthModule } from "./auth/auth.module";

const appRoutes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: "home",
    component: HomeComponent
  },
  { path: "admin", loadChildren: () => AdminModule },
  { path: "login", loadChildren: () => AuthModule },
  //{ path: "register", component: RegisterComponent },
  { path: "courses", loadChildren: () => CoursesModule },
  { path: "tutorials", loadChildren: () => TutorialsModule },
  { path: "search", component: SearchComponent }
  //  { path: "header", component: HeaderComponent }
  // otherwise redirect to home
  // { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes, {
  enableTracing: true // <-- debugging purposes only
  // preloadingStrategy: SelectivePreloadingStrategy,
});

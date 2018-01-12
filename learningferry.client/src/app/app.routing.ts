import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { CoursesComponent } from './courses/courses.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { AdminModule } from './admin/admin.module';

const appRoutes: Routes = [
    {
        path: 'home', component: HomeComponent

    },
    { path: 'admin', loadChildren: () => AdminModule },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'tutorials', component: TutorialsComponent },
    { path: 'search', component: SearchComponent },
    { path: 'header', component: HeaderComponent },
    // otherwise redirect to home
    // { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes,
    {
        enableTracing: true // <-- debugging purposes only
        // preloadingStrategy: SelectivePreloadingStrategy,

    }
);

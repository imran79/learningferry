import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

//import { AppComponent } from "./app.component";
import { routing } from "./app.routing";

//import { customHttpProvider } from './_helpers/index';
import { SharedModule } from "./common/shared.module";
import { AuthModule } from "./auth/auth.module";
import { AuthGuard } from "./_guards/index";
import { reducers, metaReducers } from "./reducers";

import { HomeComponent } from "./home/index";

//import { RegisterComponent } from './register/index';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import { CustomMaterialModule } from './custom.material.module';
import { SearchComponent } from "./search/search.component";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { DBModule } from "@ngrx/db";
import { environment } from "../environments/environment";
import { CoreModule } from "./core/core.module";
import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from "@ngrx/router-store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { AppComponent } from "./core/containers/layouts/app.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule,
    // CustomMaterialModule,

    SharedModule,
    CoreModule.forRoot(),
    StoreModule.forRoot({}),
    AuthModule.forRoot(),

    StoreModule.forRoot(reducers, { metaReducers }),
    /**
     * @ngrx/router-store keeps router state up-to-date in the store.
     */
    StoreRouterConnectingModule.forRoot({
      /*
              They stateKey defines the name of the state used by the router-store reducer.
              This matches the key defined in the map of reducers
            */
      stateKey: "router"
    }),

    /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging.
     *
     * To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension
     */
    StoreDevtoolsModule.instrument({
      name: "Learning Ferry Store DevTools",
      logOnly: environment.production
    }),

    /**
     * EffectsModule.forRoot() is imported once in the root module and
     * sets up the effects class to be initialized immediately when the
     * application starts.
     *
     * See: https://github.com/ngrx/platform/blob/master/docs/effects/api.md#forroot
     */
    EffectsModule.forRoot([])
  ],
  declarations: [
    HomeComponent,

    // RegisterComponent,
    SearchComponent
  ],
  providers: [
    //customHttpProvider,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

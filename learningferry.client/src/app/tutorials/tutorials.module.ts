import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TutorialDetailsComponent } from "./tutorial-details/tutorial-details.component";
import { AllTutorialsComponent } from "./all-tutorials/all-tutorials.component";
import { CreateOrEditTutorialsComponent } from "./create-or-edit-tutorials/create-or-edit-tutorials.component";
import { tutorialsRouting } from "./tutorials.routing";
import { TutorialDetailComponent } from "./components/tutorial-details.component";
import { TutorialListComponent } from "./components/tutorial-list.component";
import { TutorialPreviewComponent } from "./components/tutorial-preview.component";
import { CollectionPageComponent } from "./containers/CollectionPageComponent";
import { StoreModule } from "@ngrx/store";
import { TutorialEffects } from "./effects/turorial.effects";
import { EffectsModule } from "@ngrx/effects";

import { TutorialService } from "./services/tutorial.service";
import { reducers } from "./reducers";

@NgModule({
  imports: [
    CommonModule,
    tutorialsRouting,

    StoreModule.forFeature("tutorials", reducers),

    /**
     * Effects.forFeature is used to register effects
     * from feature modules. Effects can be loaded
     * eagerly or lazily and will be started immediately.
     *
     * All Effects will only be instantiated once regardless of
     * whether they are registered once or multiple times.
     */
    EffectsModule.forFeature([TutorialEffects])
  ],
  declarations: [
    TutorialDetailsComponent,
    AllTutorialsComponent,
    CreateOrEditTutorialsComponent,
    TutorialDetailComponent,
    TutorialListComponent,
    TutorialPreviewComponent,
    CollectionPageComponent
  ],
  providers: [TutorialService]
})
export class TutorialsModule {}

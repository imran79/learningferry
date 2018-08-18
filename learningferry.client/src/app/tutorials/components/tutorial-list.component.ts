import { Component, Input } from "@angular/core";
import { Tutorial } from "../models/tutorial";

@Component({
  selector: "lf-Tutorial-list",
  template: `
    <lf-Tutorial-preview *ngFor="let Tutorial of Tutorials" [Tutorial]="Tutorial">
    </lf-Tutorial-preview>
  `,
  styles: [
    `
 
  `
  ]
})
export class TutorialListComponent {
  @Input() Tutorials: Tutorial[];
}

import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Tutorial } from "../models/tutorial";

@Component({
  selector: "lf-tutorial-detail",
  template: `
    <form>

  <div class="input-field">
    <input id="title" type="text">
    <label for="title">Title</label>
  </div>

  <div class="input-field">
    <input type="text" class="datepicker" id="date">
    <label for="date">Choose a Date</label>
  </div>

  
  <button>Click me!</button>
</form>


  `,
  styles: [
    `
  
  `
  ]
})
export class TutorialDetailComponent {
  /**
   * Presentational components receive data through @Input() and communicate events
   * through @Output() but generally maintain no internal state of their
   * own. All decisions are delegated to 'container', or 'smart'
   * components before data updates flow back down.
   *
   * More on 'smart' and 'presentational' components: https://gist.github.com/btroncone/a6e4347326749f938510#utilizing-container-components
   */
  @Input() Tutorial: Tutorial;
  @Input() inCollection: boolean;
  @Output() add = new EventEmitter<Tutorial>();
  @Output() remove = new EventEmitter<Tutorial>();

  /**
   * Tip: Utilize getters to keep templates clean
   */
  get id() {
    return this.Tutorial.id;
  }

  get title() {
    return this.Tutorial.title;
  }

  get description() {
    return this.Tutorial.description;
  }

  get thumbnail() {
    return "";
  }
}

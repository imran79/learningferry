import { Component, Output, Input, EventEmitter } from "@angular/core";

@Component({
  selector: "lf-toolbar",
  template: `
    <header>
 <header>
  <nav class="blue darken-4" style="z-index:3 z-depth-5;">
    <div class="container">
      <div class="nav-wrapper fixed">
        <a href="#" class="brand-logo hide-on-med-and-down" style="float:right"><div><img class="circle" style="vertical-align: middle;
  margin-bottom: 1 em;height: 100%; margin-right:0.5em" src="../../../../assets/img/learningferry.jpg"><span>Learning Ferry...</span></div></a>
        <a data-target="slide-out" class="sidenav-trigger" data-activates="mobile-nav" href="#" (click)="openMenu.emit()">
          <i class="material-icons">menu</i>
        </a>
        <ul class="right hide-on-med-and-down">
          <ng-content> </ng-content>
        </ul>
      </div>
    </div>
  </nav>
</header>
  `,
  styles: [
    `.brand-logo div span{
      margin-bottom :5px;
      
    }

  `
  ]
})
export class ToolbarComponent {
  @Output() openMenu = new EventEmitter();
}

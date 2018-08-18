import { Component, Input, OnInit, AfterViewInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: "lf-sidenav",
  template: `
     <ul id="slide-out" class="sidenav hide-on-med-and-up" *ngIf= "open" >      
        <ng-content></ng-content>      
    </ul>
  `,
  styles: ["margin-top"],
  animations: [
    trigger("slideInOut", [
      transition(":enter", [
        style({ transform: "translateY(-100%)" }),
        animate("200ms ease-in", style({ transform: "translateY(0%)" }))
      ]),
      transition(":leave", [
        animate("200ms ease-in", style({ transform: "translateY(-100%)" }))
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit {
  @Input() open = false;
  constructor() {}
  ngOnInit() {}
}

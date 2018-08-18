import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "lf-nav-item",
  template: `
    <li class="nav-item">
     <a [routerLink]="routerLink" (click)="navigate.emit()">
     
     <ng-content></ng-content>
     
      
     
      
    </a>            
    </li>
  `,
  styles: [
    `
    a {
  width: auto;
  display: inline-block!important;
 
    white-space:nowrap;
}

span.expand {
  background: url(https://cdn2.iconfinder.com/data/icons/deadsimple/youtube.gif) no-repeat right center;
  text-decoration: none !important;
  background-position: top right;
  padding: 11px;
  float: right;
}
    .nav-item{
      color : white;
    }
 
    .secondary {
      color: rgba(0, 0, 0, 0.54);
    }
  `
  ]
})
export class NavItemComponent {
  @Input() icon = "";
  @Input() hint = "";
  @Input() routerLink: string | any[] = "/";
  @Output() navigate = new EventEmitter();
}

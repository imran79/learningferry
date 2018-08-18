import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "lf-nav-header",
  template: `
    <li class="secondary">
    
     <a href="#" class="brand-logo"><img class="circle" src="../../../../assets/img/learningferry.jpg">
     Learning Ferry...</a>
    
      <a href="#user" *ngIf="userImage !== ''" ></a>
      <a href="#name" *ngIf="userName !== ''" ><span class="white-text name">{{userName}}</span></a>
      <a href="#email" *ngIf="userEmail !== ''" ><span class="white-text email">{{userEmail}}</span></a>
    
    </li>   
  `,
  styles: [
    `
    .secondary {
      
      height:57px;
     * Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#1e5799+56,7db9e8+100 */
background: #1e5799; /* Old browsers */
background: -moz-linear-gradient(top, #1e5799 56%, #7db9e8 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top, #1e5799 56%,#7db9e8 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom, #1e5799 56%,#7db9e8 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799', endColorstr='#7db9e8',GradientType=0 ); /* IE6-9 */

    }

    .brand-logo {
    position: absolute;
    color: #fff;
    display: inline-block;
    font-size: 2.1rem;
    padding: 0;
}
  `
  ]
})
export class NavHeaderComponent {
  @Input() bckGroundImage = "";
  @Input() userImage = "";
  @Input() userName = "";
  @Input() userEmail = "";
  //will decide on the navigaton on the button link
  //@Input() routerLink: string | any[] = "/";
  //@Output() navigate = new EventEmitter();
}

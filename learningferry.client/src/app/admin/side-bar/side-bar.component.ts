import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})


export class SideBarComponent implements OnInit, AfterViewInit {
  routes: any;
  activeRoute: string;
  constructor() { }

  ngOnInit() {
    this.getRoutes();
  }
  ngAfterViewInit() {
    $('#admin').sideNav();
    $('.collapsible').collapsible();
  }

  public setActiveRoute(rou: string) {
    console.log(rou);
    this.activeRoute = rou;
    this.navigateRoute(this.routes);
  }

  private navigateRoute(allRoutes): boolean {
    // tslint:disable-next-line:no-var-keyword
    var rootFound = false;
    // tslint:disable-next-line:prefer-const
    for (let r of allRoutes) {
      if (r.name === this.activeRoute) {
        r.isActive = !r.isActive;
        rootFound = true;
        console.log('if match condition');
        console.log(this.activeRoute);

      } else {
        r.isActive = false;
        console.log('else match condition');
        console.log(r.name);
      }
      if (r.childRoutes && r.childRoutes.length > 0 && !rootFound) {
        r.isActive = this.navigateRoute(r.childRoutes);
      }
    }
    return rootFound;
  }


  getRoutes(): any {
    this.routes = [
      {
        name: 'Courses', description: 'Courses', path: '', icon: 'book', isActive: false, childRoutes: [
          { name: 'allCourses', description: 'All Courses', path: './editCourse', icon: 'book', isActive: false, childRoutes: [] },
          { name: 'createCourses', description: 'Create Course', path: './editCourse', icon: 'book', isActive: false, childRoutes: [] }
        ]
      },
      {
        name: 'Tutorials', description: 'Tutorials', path: '', icon: 'Tutorial', isActive: false, childRoutes: [
          { name: 'allTutorials', description: 'All Tutorials', path: './editTutorials', icon: 'book', isActive: false, childRoutes: [] },
          {
            name: 'createTutorial', description: 'Create Tutorial', path: './editTutorials', icon: 'book',
            isActive: false, childRoutes: []
          }
        ]
      }
    ];
  }




}

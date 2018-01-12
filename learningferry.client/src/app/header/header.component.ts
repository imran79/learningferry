import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goAdmin() {
    alert('admin route');
    this.router.navigate(['admin']);
  }

  goHome() {
    this.router.navigate(['']);
  }

  goCourses() {
    this.router.navigate(['courses']);
  }

  goTutorials() {
    this.router.navigate(['tutorials']);
  }

  goSearch() {
    this.router.navigate(['search']);
  }

  goLogin() {
    this.router.navigate(['login']);
  }

}

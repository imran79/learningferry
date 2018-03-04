import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-create-or-edit-tutorials',
  templateUrl: './create-or-edit-tutorials.component.html',
  styleUrls: ['./create-or-edit-tutorials.component.css']
})
export class CreateOrEditTutorialsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('.datepicker').pickadate({
      selectMonths: true,
      selectYears: 15,
      closeOnSelect: true
    });
  }

}

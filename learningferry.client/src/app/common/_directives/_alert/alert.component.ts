﻿import { Component, OnInit } from '@angular/core';

// import { AlertService } from '../../_services/index';

@Component({
    moduleId: module.id,
    selector: 'alert-message',
    templateUrl: 'alert.component.html'
})

export class AlertComponent implements OnInit {

    message: any;

    // constructor(private alertService: AlertService) { }
    constructor() { }

    ngOnInit() {
        //  this.alertService.getMessage().subscribe(message => { this.message = message; });
    }
}

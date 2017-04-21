import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase/app";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

  success : boolean = false;
  constructor() { }

  ngOnInit() {
  }

  sendEmailReset(form: NgForm) {

    var self = this;
    var auth = firebase.auth();
    var emailAddress = form.value.email;

    auth.sendPasswordResetEmail(emailAddress).then(function() {
      self.success = true;
    }, function(error) {
      // An error happened.
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';
import {Registration} from './registration.model';

@Component({
  selector: 'app-signup',
  templateUrl: './register.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const id = Math.random().toString(36).substring(2);
    const firstname = form.value.firstname;
    const lastname = form.value.lastname;
    const email = form.value.email;
    const password = form.value.password;
    const registration = new Registration(id, firstname, lastname, email, password);
    this.authService.signupUser(registration);
  }

}

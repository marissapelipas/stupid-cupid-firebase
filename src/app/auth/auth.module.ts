import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthRoutingModule } from './auth-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { PasswordResetComponent } from './password-reset/password-reset.component';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    PasswordResetComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AuthRoutingModule
  ]
})
export class AuthModule {}

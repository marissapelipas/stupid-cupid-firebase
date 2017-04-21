import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

import {ProfilesRoutingModule} from './profiles-routing.module';
import { SharedModule } from '../shared/shared.module';
import {DetailsProfilesComponent} from "./details-profiles/details-profiles.component";
import {EditProfilesComponent} from "./edit-profiles/edit-profiles.component";
import { RandomProfilesComponent } from './random-profiles/random-profiles.component';
import {ProfilesComponent} from "./profiles.component";
import { SideNavProfilesComponent } from './side-nav-profiles/side-nav-profiles.component';
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import { OnlineUsersComponent } from '../search/online-users/online-users.component';

@NgModule({
  declarations: [
    ProfilesComponent,
    DetailsProfilesComponent,
    EditProfilesComponent,
    RandomProfilesComponent,
    SideNavProfilesComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ProfilesRoutingModule,
    SharedModule
  ]
})
export class ProfilesModule {}

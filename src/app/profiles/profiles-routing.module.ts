import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/auth-guard.service';
import {ProfilesComponent} from "./profiles.component";
import {DetailsProfilesComponent} from "./details-profiles/details-profiles.component";
import {EditProfilesComponent} from "./edit-profiles/edit-profiles.component";
import {ProfilesService} from "./profiles.service";
import {ImagesService} from "./image.service";

const profilesRoutes: Routes = [
  { path: '', component: ProfilesComponent, children: [
    { path: ':id/details', component: DetailsProfilesComponent, canActivate: [AuthGuard] },
    { path: ':id/edit', component: EditProfilesComponent, canActivate: [AuthGuard] }
  ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(profilesRoutes)
  ],
  exports: [RouterModule],
  providers: [
    AuthGuard,
    ImagesService
  ]
})
export class ProfilesRoutingModule {}

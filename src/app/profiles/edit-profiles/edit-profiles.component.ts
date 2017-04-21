import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";

import {ProfilesService} from "../profiles.service";
import {AuthService} from "../../auth/auth.service";
import {Profile} from "../profile.model";
import {Subscription} from "rxjs";



@Component({
  selector: 'app-edit-profiles',
  templateUrl: './edit-profiles.component.html',
  styleUrls: ['./edit-profiles.component.css']
})
export class EditProfilesComponent implements OnInit {

  id : string;
  profile: Profile;

  countries = ['US', 'Canada'];
  constructor(private profileService: ProfilesService,
              private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.profile = this.profileService.getProfile(this.id);
        }
      );
  }

  onSubmit(form: NgForm) {
    this.profileService.saveProfile(form.value);
  }

  onCancel() {
    this.router.navigate(['/', this.id, 'details']);
  }

  onEdit() {
      this.router.navigate(['/edit'], {relativeTo: this.route});
  }

}

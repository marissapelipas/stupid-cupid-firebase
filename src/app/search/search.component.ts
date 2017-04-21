import { Component, OnInit } from '@angular/core';
import {Profile} from "../profiles/profile.model";
import {ProfilesService} from "../profiles/profiles.service";
import {Subscription} from "rxjs";
import {Form, NgForm} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  profiles: Profile[];
  searchField : string = '';
  subscription : Subscription;
  constructor(private profileService: ProfilesService) { }

  ngOnInit() {
    this.subscription = this.profileService.userProfilesChanged
      .subscribe(
        (profiles: Profile[]) => {
          this.profiles = profiles;
        }
      );
  }

  onSubmit(ngForm: NgForm) {
    this.profileService.searchProfile(ngForm.value.searchField);

  }

  whosOnline() {
    this.profileService.whoIsOnline();
  }
}

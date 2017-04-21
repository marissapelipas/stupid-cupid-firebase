import {Component, OnInit} from '@angular/core';
import { Response } from '@angular/http';

import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';
import {Router} from "@angular/router";
import {ProfilesService} from "../../profiles/profiles.service";
import {ImagesService} from "../../profiles/image.service";
import {Subscription} from "rxjs";
import {Profile} from "../../profiles/profile.model";
import {OnlineUserService} from "../../profiles/online-user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.html'
})
export class HeaderComponent implements OnInit {

  profile : Profile;
  profileImgUrl: string = "../assets/images/avatar.jpg";
  subscription: Subscription;
  profileSubscription: Subscription;

  constructor(private dataStorageService: DataStorageService,
              public authService: AuthService,
              private router: Router,
              private profileService: ProfilesService,
              private imagesService: ImagesService,
              private onlineUsers: OnlineUserService) {
  }

  ngOnInit() {
    this.subscription = this.imagesService.avatarChanged
      .subscribe(
        (url: string) => {
          this.profileImgUrl = url;
        }
      );


    this.profileSubscription = this.profileService.userProfileChanged
      .subscribe(
        (profile: Profile) => {
          this.profile = profile;
          this.profileImgUrl = this.profile.avatarUrl !== undefined ? this.profile.avatarUrl : "../assets/images/avatar.jpg";
        }
      );
  }

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  gotToProfile() {
    var profile = this.profileService.userProfile;
    this.router.navigate(['/', profile.id, 'details']);
  }

  gotToSearch() {
    this.router.navigate(['/search']);
  }

  onLogout() {
    this.authService.logout();
  }

  gotToWhosOnline() {
      this.onlineUsers.onlineUsers();
      this.router.navigate(['/onlineUsers']);
  }
}

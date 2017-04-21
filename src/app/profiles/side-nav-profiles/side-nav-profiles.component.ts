import {Component, OnInit, ViewChild} from '@angular/core';
import {UploadImagesService} from "../../core/images/upload-image.service";
import {FileItem} from "../../core/images/file-item";
import {ImagesService} from "../image.service";
import {ProfilesService} from "../profiles.service";
import {Subscription} from "rxjs";
import {Profile} from "../profile.model";
import {prepareProfile} from "selenium-webdriver/firefox";

@Component({
  selector: 'app-side-nav-profiles',
  templateUrl: './side-nav-profiles.component.html',
  styleUrls: ['./side-nav-profiles.component.css']
})
export class SideNavProfilesComponent implements OnInit {

  isEnabledUpload: boolean = true;
  profileImgUrl: string = "../assets/images/avatar.jpg";
  file: FileItem;
  subscription: Subscription;
  profileSubscription: Subscription;
  profile: Profile;

  constructor(private imagesService: ImagesService,
              private profileService: ProfilesService) {
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

  uploadImagesToFirebase() {
    this.isEnabledUpload = false;
  }

  onChangeFile(event) {
    this.profileImgUrl = this.imagesService.uploadAvatar(event.srcElement.files[0], this.profileService.userProfile);
  }

  saveImage() {
    this.uploadImagesToFirebase();
  }
}

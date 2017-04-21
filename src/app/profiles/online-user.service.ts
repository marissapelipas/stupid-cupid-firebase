import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {ActivatedRoute, Router} from "@angular/router";
import * as firebase from 'firebase';

import {Profile} from "./profile.model";
import {Subject} from "rxjs";
import {ProfilesService} from "./profiles.service";


@Injectable()
export class OnlineUserService {
  profiles: any[] = [];
  profileChanged = new Subject<Profile[]>();
  constructor(private profileService: ProfilesService) {
  }

  onlineUsers() {
    if (this.profileService) {
      const profileRef = firebase.database().ref('presence');
      const self = this;
      self.profiles = [];
      profileRef.on('child_added', function (data) {

        var key = data.key;
        if (key) {
          self.profiles.push(self.profileService.getProfile(key));
        }
      });
      this.profileChanged.next(self.profiles);
    }

  }

}

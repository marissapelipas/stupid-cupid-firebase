import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {ActivatedRoute, Router} from "@angular/router";
import * as firebase from 'firebase';

import {Profile} from "./profile.model";
import {Subject} from "rxjs";


@Injectable()
export class ProfilesService {
  userProfile: Profile;
  userProfileChanged = new Subject<Profile>();
  userProfilesChanged = new Subject<Profile[]>();
  profiles: Profile[] = [];

  constructor(private http: Http,
              private router: Router) {
  }

  saveProfile(profile) {
    var profileRef = firebase.database().ref("user");
    profileRef.orderByChild("id").equalTo(profile.id).on("child_added", function (data) {
      data.ref.update(profile);
    });
  }

  getProfile(id) {
    var profileRef = firebase.database().ref("user");
    const self = this;

    profileRef.orderByChild("id").equalTo(id).on("child_added", function (data) {
      const dataVal = data.val();

      console.log('CURRENT ID ' + dataVal.id);
      self.userProfile = self.createProfile(dataVal);
      self.userProfileChanged.next(self.userProfile);
    });

    return self.userProfile;
  }

  public setProfile(email) {
    const profileRef = firebase.database().ref('user');

    const self = this;

    profileRef.orderByChild('email').equalTo(email).on('child_added', function (data) {
      const dataVal = data.val();

      console.log('CURRENT ID ' + dataVal.id);
      self.userProfile = self.createProfile(dataVal);
      self.userProfileChanged.next(self.userProfile);

    });
  }

  setAvatar(avatarUrl) {
    const self = this;
    var profileRef = firebase.database().ref("user");
    profileRef.orderByChild("id").equalTo(self.userProfile.id).on("child_added", function (data) {
      data.ref.update({avatarUrl : avatarUrl});
    });
  }


  createProfile(dataVal) {
    let profile = new Profile();
    profile.id = dataVal.id;
    profile.email = dataVal.email;
    profile.firstname = dataVal.firstname;
    profile.lastname = dataVal.lastname;
    profile.age = dataVal.age;
    profile.gender = dataVal.gender;
    profile.country = dataVal.country;
    profile.city = dataVal.city;
    profile.description = dataVal.description;
    profile.avatarUrl = dataVal.avatarUrl;
    return profile;
  }

  searchProfile(text) {

    const profileRef = firebase.database().ref('user');

    const self = this;
    self.profiles = [];
    profileRef.orderByChild('firstname').startAt(text).endAt(text+"\uf8ff")
      // .orderByChild('lastname').startAt(text)
      // .orderByChild('country').startAt(text)
      .on('child_added', function (data) {

        if (data.exists()) {
          if (data.hasChildren()) {

          }
        }
        const dataVal = data.val();
        self.profiles.push(self.createProfile(dataVal));

      console.log('CURRENT ID ' + dataVal.id);

    });
    self.userProfilesChanged.next(self.profiles);

  }

  whoIsOnline() {
    var listRef = firebase.database().ref("presence");
    var userRef = listRef.push();

// Add ourselves to presence list when online.
    var presenceRef = firebase.database().ref(".info/connected");
    presenceRef.on("value", function(snap) {
      if (snap.val()) {
        // Remove ourselves when we disconnect.
        userRef.onDisconnect().remove();

        userRef.set(true);
      }
    });

    listRef.on('child_added', function (data) {

      const dataVal = data.val();
      console.log('name' + data.child("firstname").val());
      console.log('CURRENT ID ' + dataVal.id);

    })
// Number of online users is the number of objects in the presence list.
    listRef.on("value", function(snap) {
      console.log("# of online users = " + snap.numChildren() + snap.val().email);
    });
  }
}

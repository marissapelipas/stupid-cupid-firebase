import {Router} from '@angular/router';
import {Http, Response} from "@angular/http";
import * as firebase from 'firebase';
import {Injectable} from '@angular/core';

import {Registration} from "./signup/registration.model";
import {Profile} from "../profiles/profile.model";
import {ProfilesService} from "../profiles/profiles.service";

@Injectable()
export class AuthService {
  private token: string;


  constructor(private http: Http, private router: Router, private profileService: ProfilesService) {
  }

  signupUser(registration: Registration) {
    firebase.auth().createUserWithEmailAndPassword(registration.email, registration.password)
      .then(
        response => {
          firebase.auth().signInWithEmailAndPassword(registration.email, registration.password)
            .then(
              response => {
                this.router.navigate(['/']);
                firebase.auth().currentUser.getToken()
                  .then(
                    (token: string) => {
                      this.token = token;
                      registration.id = firebase.auth().currentUser.uid;
                      this.http.post('https://stupidcupid-d7fde.firebaseio.com/user.json?auth=' + token, registration)
                        .subscribe(
                          (response: Response) => {
                            console.log(response);
                            firebase.auth().currentUser.getToken()
                              .then(
                                (token: string) => {
                                  this.token = token;
                                  this.profileService.getProfile(firebase.auth().currentUser.uid);
                                  this.setMyStatusOnline();
                                }
                              )
                            this.router.navigate(['/']);
                          }
                        );
                    }
                  );
              }
            )
            .catch(
              error => console.log(error)
            );

          // this.router.navigate(['/']);
          // firebase.auth().currentUser.getToken()
          //   .then(
          //     (token: string) => this.token = token
          //   )
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getToken()
            .then(
              (token: string) => {
                this.token = token;
                this.profileService.getProfile(firebase.auth().currentUser.uid);
                this.setMyStatusOnline();
              }
            );
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  setMyStatusOnline() {
    var amOnline = firebase.database().ref('.info/connected');
    var listRef = firebase.database().ref("presence/"+ firebase.auth().currentUser.uid);
    amOnline.on('value', function(snapshot) {
      if (snapshot.val()) {
        listRef.onDisconnect().remove();
        listRef.set(true);
      }
    });
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/']);
  }

  getCurrentUser() {
    return firebase.auth().currentUser;
  }

  getToken() {
    firebase.auth().currentUser.getToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }


}

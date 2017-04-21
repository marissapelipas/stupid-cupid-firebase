import { Component, OnInit } from '@angular/core';
import {OnlineUserService} from "./online-user.service";

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  constructor(private onlineUsersService: OnlineUserService) { }

  ngOnInit() {
  //   firebase.auth().onAuthStateChanged(function(user) {
  //     if (user) {
  //       this.onlineUsersService.addOnlineUsers(user);
  //     } else {
  //       // No user is signed in.
  //     }
  //   });
  }

}

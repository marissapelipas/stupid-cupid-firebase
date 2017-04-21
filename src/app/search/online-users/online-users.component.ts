import { Component, OnInit } from '@angular/core';
import {OnlineUserService} from "../../profiles/online-user.service";
import {Subscription} from "rxjs";
import {Profile} from "../../profiles/profile.model";

@Component({
  selector: 'app-online-users',
  templateUrl: './online-users.component.html',
  styleUrls: ['./online-users.component.css']
})
export class OnlineUsersComponent implements OnInit {
  profiles: Profile[];
  subscription : Subscription;
  constructor(private onlineIUsers: OnlineUserService) { }

  ngOnInit() {
    this.subscription = this.onlineIUsers.profileChanged
      .subscribe(
        (profiles: Profile[]) => {
          this.profiles = profiles;
        }
      );
  }

  whosOnline() {
    this.onlineIUsers.onlineUsers();
  }

}

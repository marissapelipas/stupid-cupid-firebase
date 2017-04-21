import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Profile} from "../profile.model";
import {ProfilesService} from "../profiles.service";

@Component({
  selector: 'app-details-profiles',
  templateUrl: './details-profiles.component.html',
  styleUrls: ['./details-profiles.component.css']
})
export class DetailsProfilesComponent implements OnInit {

  profile : Profile;
  id: string;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private profileService: ProfilesService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.profile = this.profileService.getProfile(this.id);
        }
      );
  }

  onEdit() {
    this.router.navigate(['/', this.id, 'edit']);
  }

}

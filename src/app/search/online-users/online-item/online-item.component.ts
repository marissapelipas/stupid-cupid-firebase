import {Component, Input, OnInit} from '@angular/core';
import {Profile} from "../../../profiles/profile.model";

@Component({
  selector: 'app-online-item',
  templateUrl: './online-item.component.html',
  styleUrls: ['./online-item.component.css']
})
export class OnlineItemComponent implements OnInit {


  @Input() profile: Profile;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {Profile} from "../../profiles/profile.model";

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {

  @Input() profile: Profile;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  urlAll = 'http://localhost:9100/allFriends';
  allFriends: any = [];

  constructor(private friendService: FriendService) { }

  ngOnInit(): void {
    this.friendService.getAllFriends(this.urlAll).then(data => this.allFriends = data);
  }
}

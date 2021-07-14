import { Component, OnInit } from '@angular/core';
import {FriendService} from '../friend.service';

@Component({
  selector: 'app-best-friends',
  templateUrl: './best-friends.component.html',
  styleUrls: ['./best-friends.component.css']
})
export class BestFriendsComponent implements OnInit {
  urlGet = 'http://localhost:9100/bestFriends';
  bestFriends: any = [];

  constructor(private friendService: FriendService) { }

  ngOnInit(): void {
    this.friendService.getBestFriends(this.urlGet).then(data => this.bestFriends = data);
  }
}

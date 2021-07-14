import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FriendService } from '../friend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  FormData: FormGroup;
  languages = [
    'HTML', 'CSS', 'Javascript', 'PHP', 'Python', 'Java'
  ];
  allFriends: any = [];
  deleteFriend = new FormControl('', [Validators.required, Validators.email]);

  constructor(private builder: FormBuilder, private friendService: FriendService, private router: Router) { }

  ngOnInit(): void {
    this.FormData = this.builder.group({
      firstName: new FormControl('', [Validators.required, Validators.pattern('^([^0-9]*)$')]),
      lastName: new FormControl('', [Validators.required, Validators.pattern('^([^0-9]*)$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9 ]{9,}$')]),
      language: new FormControl('', [Validators.required]),
      bestFriend: new FormControl(false)
    });
  }

  submitData(): void {
    this.friendService.addFriend(this.FormData.value).subscribe(
      data => {
        this.allFriends = data;
        this.router.navigate(['/home']);
      },
        error => {
        console.log(error);
      });
  }

  toggleSelection(event): void {
    if (event.target.checked) {
      this.FormData.value.bestFriend = true;
    }
  }

  deleteData(): void {
    this.friendService.deleteFriend(this.deleteFriend.value).subscribe(
      data => {
        // tslint:disable-next-line:no-unused-expression
        this.allFriends = data;
        this.router.navigate(['/home']);
      },
      error => {
        console.log(error);
      });
  }
}

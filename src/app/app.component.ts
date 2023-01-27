import { Component, OnInit, VERSION } from '@angular/core';
import { User } from '../model/user.model';
import { UserApi } from '../service/user/user.api';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  data: User;
  constructor(private userApi: UserApi) {}
  ngOnInit(): void {
    this.userApi.getCurrentUser().subscribe((value) => (this.data = value));
  }
}

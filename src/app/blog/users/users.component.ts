import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../_services/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.get('/users').subscribe(users => {
      this.users = users;
      console.log(users);
    });
  }

}

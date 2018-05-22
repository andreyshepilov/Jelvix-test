import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../_services/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public posts: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.get('/posts?userId=1').subscribe(posts => {
      this.posts = posts;
      console.log(posts);
    });
  }

}

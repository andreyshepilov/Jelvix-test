import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { ApiService } from '../../_services/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public posts: any;
  public userId: number;

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.params.id;

    this.api.get('/posts?userId=' + this.userId).subscribe(posts => {
      this.posts = posts;
    });
  }

}

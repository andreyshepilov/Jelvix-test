import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { ApiService } from '../../_services/api.service';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  public comments: any;
  public postId: number;

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.postId = this.activatedRoute.snapshot.params.id;

    this.api.get('/comments?postId=' + this.postId).subscribe(comments => {
      this.comments = comments;
    });
  }

}

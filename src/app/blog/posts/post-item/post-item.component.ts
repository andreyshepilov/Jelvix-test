import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

  @Input('postTitle') public postTitle;
  @Input('postBody') public postBody;
  @Input('postId') public postId;

  constructor() { }

  ngOnInit() {
  }

}

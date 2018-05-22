import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss']
})
export class CommentItemComponent implements OnInit {

  @Input('commentName') public commentName;
  @Input('commentEmail') public commentEmail;
  @Input('commentBody') public commentBody;

  constructor() { }

  ngOnInit() {
  }

}

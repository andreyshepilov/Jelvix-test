import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ApiService } from '../_services/api.service';

import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { UserItemComponent } from './users/user-item/user-item.component';
import { PostItemComponent } from './posts/post-item/post-item.component';
import { CommentItemComponent } from './comments/comment-item/comment-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    UsersComponent, 
    PostsComponent, 
    CommentsComponent, UserItemComponent, PostItemComponent, CommentItemComponent
  ],
  providers: [ApiService]
})
export class BlogModule { }

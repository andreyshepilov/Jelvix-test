import { Routes } from '@angular/router';

import { CommentsComponent } from './blog/comments/comments.component';
import { PostsComponent } from './blog/posts/posts.component';
import { UsersComponent } from './blog/users/users.component';


export const ROUTES: Routes = [
    {
        path: '',
        component: UsersComponent
    },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'posts/:id',
        component: PostsComponent,
        pathMatch: 'full'
    },
    {
        path: 'comments/:id',
        component: CommentsComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: ''
    }
];
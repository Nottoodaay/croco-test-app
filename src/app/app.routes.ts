import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { HeaderComponent } from './header/header.component';
import { UsersPostComponent } from './users/users-post/users-post.component';

export const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'users', component: UsersComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'users/posts/:userId', component: UsersPostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

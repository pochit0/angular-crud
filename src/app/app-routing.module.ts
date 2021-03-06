import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Category
import { AddCategoryComponent } from './modules/category/add-category/add-category.component';
import { CategoryListComponent } from './modules/category/category-list/category-list.component';
import { EditCategoryComponent } from './modules/category/edit-category/edit-category.component';

// Posts
import { AddPostComponent } from './modules/post/add-post/add-post.component';
import { EditPostComponent } from './modules/post/edit-post/edit-post.component';
import { PostsListsComponent } from './modules/post/posts-lists/posts-lists.component';

// User
import { AddUserComponent } from './modules/user/add-user/add-user.component';
import { UserListComponent } from './modules/user/user-list/user-list.component';
import { EditUserComponent } from './modules/user/edit-user/edit-user.component';


// Login
import { LoginComponent } from './modules//login/login/login.component';

import { GuardService } from './services/guard.service';

const routes: Routes = [
  {
    path: '',
    component: PostsListsComponent,
    canActivate: [GuardService],
    data: { roles: ['Admin', 'Editor', 'Viewer'] },
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'list-category',
    component: CategoryListComponent,
    canActivate: [GuardService],
    data: { roles: ['Admin', 'Editor', 'Viewer'] },
  },
  {
    path: 'add-category',
    component: AddCategoryComponent,
    canActivate: [GuardService],
    data: { roles: ['Admin', 'Editor'] },
  },
  {
    path: 'edit-category',
    component: EditCategoryComponent,
    canActivate: [GuardService],
    data: { roles: ['Admin', 'Editor'] },
  },
  {
    path: 'add-post',
    component: AddPostComponent,
    canActivate: [GuardService],
    data: { roles: ['Admin', 'Editor'] },
  },
  {
    path: 'edit-post',
    component: EditPostComponent,
    canActivate: [GuardService],
    data: { roles: ['Admin', 'Editor'] },
  },
  {
    path: 'list-user',
    component: UserListComponent,
    canActivate: [GuardService],
    data: { roles: ['Admin'] },
  },
  {
    path: 'add-user',
    component: AddUserComponent,
    canActivate: [GuardService],
    data: { roles: ['Admin'] },
  },
  {
    path: 'edit-user',
    component: EditUserComponent,
    canActivate: [GuardService],
    data: { roles: ['Admin'] },
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

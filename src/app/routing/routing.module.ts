import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IssueListComponent } from '../issue-list/issue-list.component';
import { MainPageComponent } from '../main-page/main-page.component';
import { IssueEditComponent } from '../issue-edit/issue-edit.component';
import { AuthGuard } from '../auth.guard';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'issues',
    component: IssueListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'issues/add',
    component: IssueEditComponent,
    canActivate: [AuthGuard]
  },
  // {
  //   path: 'issues/:id',
  //   component: IssueDetailComponent
  // },
  {
    path: 'issues/:id/edit',
    component: IssueEditComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN']
    }
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }

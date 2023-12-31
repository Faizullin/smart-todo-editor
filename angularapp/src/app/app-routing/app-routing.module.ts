import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../_features/auth/login/login.component';
import { HomeComponent } from '../_features/home/home.component';
import { DocumentEditComponent } from '../_features/docs/document-edit/document-edit.component';




const routes: Routes = [
  {
    title: 'Home',
    path: '',
    component: HomeComponent,
  },
  {
    title: 'Login',
    path: 'auth/login',
    component: LoginComponent,
  },
  {
    path: 'docs',
    children: [
      {
        title: 'Edit',
        path: 'edit',
        component: DocumentEditComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

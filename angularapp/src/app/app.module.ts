import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './_features/auth/login/login.component';
import { HomeComponent } from './_features/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NavbarComponent } from './_shared/components/navbar/navbar/navbar.component';
import { AuthInterceptor } from './_core/interceptors/auth.interceptor';
import { ErrorModalComponent } from './_shared/modals/error-modal/error-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    ErrorModalComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, ReactiveFormsModule, AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
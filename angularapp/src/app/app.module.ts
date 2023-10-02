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
import { SearchSectionComponent } from './_shared/components/search-section/search-section.component';
import { TableComponent } from './_shared/components/table/table/table.component';
import { TablePaginationComponent } from './_shared/components/table/table-pagination/table-pagination.component';
import { DocumentEditComponent } from './_features/docs/document-edit/document-edit.component';
import { QuillModule } from 'ngx-quill';
import { RichTextEditorComponent } from './_shared/forms/rich-text-editor/rich-text-editor.component';
import { RichTextEditorModule } from './_shared/forms/rich-text-editor/rich-text-editor.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    ErrorModalComponent,
    SearchSectionComponent,
    TableComponent,
    TablePaginationComponent,
    DocumentEditComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RichTextEditorModule,
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

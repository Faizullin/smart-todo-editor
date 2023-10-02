import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RichTextEditorComponent } from './rich-text-editor.component';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [CommonModule, FormsModule, QuillModule],
  exports: [RichTextEditorComponent],
  declarations: [RichTextEditorComponent],
})
export class RichTextEditorModule { }

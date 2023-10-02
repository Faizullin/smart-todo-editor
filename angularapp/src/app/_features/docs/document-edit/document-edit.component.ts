import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.scss'],
})
export class DocumentEditComponent implements OnInit {
  control = new FormControl()

  ngOnInit() {
    //this.control = new FormControl('Initial editor content')
  }
  constructor() {
    this.control.setValue('Hello, world!');
  }


  submit() {
    console.log("value",this.control.value)
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorModalService {
  is_open: boolean = false;
  error_data?: ErrorData;

  constructor() { }

  openErrorModal(code: number | null, text: string) {
    this.error_data = {
      message: text,
      code,
    }
    this.openModal()
  }

  openModal() {
    this.is_open = true;
    console.log("Opened")
  }

  closeModal() {
    this.is_open = false;
  }
}

export interface ErrorData {
  message: string
  code: number | null
}

import { Component } from '@angular/core';
import { ErrorModalService } from 'src/app/_core/services/error-modal.service';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.scss']
})
export class ErrorModalComponent {
  constructor(public errorModalService: ErrorModalService) { }
}

import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent implements OnInit {
  messages: Message[];

  constructor(public errorService: ErrorService) {}

  ngOnInit() {
    this.messages = [
      { severity: 'error', summary: 'Ошибка', detail: 'Ошибка при загрузке' },
    ];
  }
}

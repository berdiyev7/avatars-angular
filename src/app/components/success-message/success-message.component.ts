import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { SuccessService } from 'src/app/services/success.service';

@Component({
  selector: 'app-success-message',
  templateUrl: './success-message.component.html',
  styleUrls: ['./success-message.component.scss'],
})
export class SuccessMessageComponent implements OnInit {
  messages: Message[];

  constructor(public successService: SuccessService) {}

  ngOnInit() {
    this.messages = [
      {
        severity: 'success',
        summary: 'Успешно',
      },
    ];
  }
}

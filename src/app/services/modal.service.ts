import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  visible = false;

  showDialog() {
    this.visible = true;
  }

  closeDialog() {
    this.visible = false;
  }
}

import { Component } from '@angular/core';
import { UploadImagesService } from './services/upload-images.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'avatar-angular';

  constructor(
    public changeImg: UploadImagesService,
    public uploadService: UploadImagesService
  ) {}
}

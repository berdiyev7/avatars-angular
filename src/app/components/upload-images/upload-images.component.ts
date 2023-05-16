import { Component, ElementRef, ViewChild } from '@angular/core';
import { UploadImagesService } from 'src/app/services/upload-images.service';

@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.scss'],
})
export class UploadImagesComponent {
  constructor(public handleImg: UploadImagesService) {}
}

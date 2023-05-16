import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import Cropper from 'cropperjs';
import { ModalService } from 'src/app/services/modal.service';
import { SuccessService } from 'src/app/services/success.service';
import { UploadImagesService } from 'src/app/services/upload-images.service';

@Component({
  selector: 'app-cropper-image',
  templateUrl: './cropper-image.component.html',
  styleUrls: ['./cropper-image.component.scss'],
})
export class CropperImageComponent {
  @ViewChild('image', { static: false }) imageElement: ElementRef;

  @Input('src')
  imageSource: string;
  imageDestination: string;

  cropper: Cropper;

  constructor(
    private uploadService: UploadImagesService,
    private successService: SuccessService,
    public modalService: ModalService
  ) {}

  ngAfterViewInit() {
    this.cropper = new Cropper(this.imageElement.nativeElement, {
      zoomable: false,
      scalable: false,
      aspectRatio: 1,
      viewMode: 1,
      cropBoxResizable: false,
      crop: () => {
        const canvas = this.cropper.getCroppedCanvas();
        this.imageDestination = canvas.toDataURL('image/png');
      },
    });
  }

  upload() {
    this.uploadService.uploadImages(this.imageDestination).subscribe(() => {
      this.successService.registerSuccess = true;
      this.modalService.closeDialog();
    });
  }
}

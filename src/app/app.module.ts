import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AvatarMainModule } from './avatar/avatar.module';
import { ModalComponent } from './components/modal/modal.component';
import { CropperImageComponent } from './components/cropper-image/cropper-image.component';
import { UploadImagesComponent } from './components/upload-images/upload-images.component';

import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { SuccessMessageComponent } from './components/success-message/success-message.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    CropperImageComponent,
    UploadImagesComponent,
    ErrorMessageComponent,
    SuccessMessageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AvatarMainModule,
    DialogModule,
    ButtonModule,
    MessagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

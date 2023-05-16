import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './components/avatar.component';
import { AvatarModule } from 'primeng/avatar';

@NgModule({
  declarations: [AvatarComponent],
  imports: [CommonModule, AvatarModule],
  exports: [AvatarComponent],
})
export class AvatarMainModule {}

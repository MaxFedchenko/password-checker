import { NgModule } from '@angular/core';

import { PasswordZoneComponent } from './components/password-zone/password-zone.component';
import { PasswordInputComponent } from './components/password-input/password-input.component';
import { StrengthBlocksComponent } from './components/strength-blocks/strength-blocks.component';
import { PasswordStrengthService } from './services/password-strength.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    PasswordZoneComponent,
    PasswordInputComponent,
    StrengthBlocksComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [PasswordStrengthService],
  exports: [PasswordZoneComponent],
})
export class PasswordModule {}

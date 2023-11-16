import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PasswordModule } from './modules/password-module/password.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PasswordModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

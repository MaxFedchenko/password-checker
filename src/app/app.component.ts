import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Password Checker';
  password: string = '';
  sections: string[] = ['gray', 'gray', 'gray'];

  checkPasswordStrength() {
    const length = this.password.length;

    if (length === 0) {
      this.sections = ['gray', 'gray', 'gray'];
    } else if (length < 8) {
      this.sections = ['red', 'red', 'red'];
    } else {
      const hasLetters = /[a-zA-Z]/.test(this.password);
      const hasDigits = /\d/.test(this.password);
      const hasSymbols = /[^a-zA-Z\d]/.test(this.password);
      const strength = [hasLetters, hasDigits, hasSymbols].filter(
        (el) => el
      ).length;

      if (strength == 1) {
        this.sections = ['red', 'gray', 'gray'];
      } else if (strength == 2) {
        this.sections = ['yellow', 'yellow', 'gray'];
      } else {
        this.sections = ['green', 'green', 'green'];
      }
    }
  }
}

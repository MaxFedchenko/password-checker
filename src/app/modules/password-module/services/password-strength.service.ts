import { Injectable } from '@angular/core';
import { PasswordStrength } from '../types/password-strength.enum';

@Injectable({
  providedIn: 'root',
})
export class PasswordStrengthService {
  getPasswordStrength(password: string): PasswordStrength {
    const length = password.length;

    if (length == 0) {
      return PasswordStrength.Empty;
    } else if (length < 8) {
      return PasswordStrength.LessCharacters;
    } else {
      const hasLetters = /[a-zA-Z]/.test(password);
      const hasDigits = /\d/.test(password);
      const hasSymbols = /[^a-zA-Z\d]/.test(password);
      const strength = [hasLetters, hasDigits, hasSymbols].filter(
        (el) => el
      ).length;

      if (strength == 1) {
        return PasswordStrength.Easy;
      } else if (strength == 2) {
        return PasswordStrength.Medium;
      } else {
        return PasswordStrength.Strong;
      }
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { PasswordStrength } from '../../types/password-strength.enum';
import { PasswordStrengthService } from '../../services/password-strength.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-password-zone',
  templateUrl: './password-zone.component.html',
})
export class PasswordZoneComponent implements OnInit {
  password = new FormControl('');
  passwordStrength: string[] = ['gray', 'gray', 'gray'];

  constructor(private passwordStrengthService: PasswordStrengthService) {}

  ngOnInit(): void {
    this.password.valueChanges.subscribe((pwd) =>
      this.updatePasswordStrength(pwd ?? '')
    );
  }

  private updatePasswordStrength(password: string): void {
    const passwordStrength =
      this.passwordStrengthService.getPasswordStrength(password);

    switch (passwordStrength) {
      case PasswordStrength.Empty:
        this.passwordStrength = ['gray', 'gray', 'gray'];
        break;
      case PasswordStrength.LessCharacters:
        this.passwordStrength = ['red', 'red', 'red'];
        break;
      case PasswordStrength.Easy:
        this.passwordStrength = ['red', 'gray', 'gray'];
        break;
      case PasswordStrength.Medium:
        this.passwordStrength = ['yellow', 'yellow', 'gray'];
        break;
      case PasswordStrength.Strong:
        this.passwordStrength = ['green', 'green', 'green'];
        break;
      default:
        throw new Error('Unreachable code');
    }
  }
}

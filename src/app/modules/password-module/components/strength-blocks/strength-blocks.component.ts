import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-strength-blocks',
  templateUrl: './strength-blocks.component.html',
  styleUrls: ['./strength-blocks.component.css'],
})
export class StrengthBlocksComponent {
  @Input() strength: string[] = [];
}

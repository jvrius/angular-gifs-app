import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon',
  imports: [],
  templateUrl: './icon.html',
  styleUrl: './icon.css',
})
export class Icon {
  name = input.required<string>();
  size = input<string>("1.5rem");
}

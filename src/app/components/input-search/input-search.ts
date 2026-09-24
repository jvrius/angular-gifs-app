import { Component, input, output } from '@angular/core';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-input-search',
  imports: [Icon],
  templateUrl: './input-search.html',
  styleUrl: './input-search.css',
})
export class InputSearch {
  value = input.required<string>();

  onSearch = output<string>();
  onClear = output<HTMLInputElement>();
}

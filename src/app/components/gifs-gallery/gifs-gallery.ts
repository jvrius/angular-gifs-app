import { Component, input } from '@angular/core';
import type { Gif } from '../../interfaces/gif';

@Component({
  selector: 'app-gifs-gallery',
  imports: [],
  templateUrl: './gifs-gallery.html',
  styleUrl: './gifs-gallery.css',
})
export class GifsGallery {
  gifList = input.required<Gif[]>();
}

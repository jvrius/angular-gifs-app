import { Component, inject } from '@angular/core';
import { GifsGallery } from '../../components/gifs-gallery/gifs-gallery';
import { TrendingService } from '../../services/trending-service';

@Component({
  selector: 'app-trending-page',
  imports: [GifsGallery],
  templateUrl: './trending-page.html',
  styleUrl: './trending-page.css',
})
export class TrendingPage {
  protected TrendingService = inject(TrendingService);
}

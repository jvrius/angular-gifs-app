import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { GifsGallery } from '../../components/gifs-gallery/gifs-gallery';
import { SearchService } from '../../services/search-service';


@Component({
  selector: 'app-history-page',
  imports: [GifsGallery],
  templateUrl: './history-page.html',
  styleUrl: './history-page.css',
})
export class HistoryPage {
  private route = inject(ActivatedRoute);
  protected searchService = inject(SearchService);

  private paramMap = toSignal(this.route.paramMap);
  protected query = computed(() => this.paramMap()?.get('query') ?? '');
}

import { Component, inject } from '@angular/core';
import { SearchService } from '../../services/search-service';
import { GifsGallery } from '../../components/gifs-gallery/gifs-gallery';
import { InputSearch } from '../../components/input-search/input-search';

@Component({
  selector: 'app-search-page',
  imports: [GifsGallery, InputSearch],
  templateUrl: './search-page.html',
  styleUrl: './search-page.css',
})
export class SearchPage {
  protected searchService = inject(SearchService);

  protected setQuery(query: string): void {
    if (query) {
      this.searchService.query.set(query.trim().toLowerCase());
    }
  }

  protected resetQuery(input: HTMLInputElement): void {
    if (this.searchService.query()) {
      this.searchService.query.set('');
    } else {
      input.value = '';
    }
  }
}

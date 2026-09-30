import { Component, inject } from '@angular/core';
import { SearchService } from '../../services/search-service';
import { Icon } from '../icon/icon';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-menu-history',
  imports: [Icon, RouterLink, RouterLinkActive],
  templateUrl: './side-menu-history.html',
  styleUrl: './side-menu-history.css',
})
export class SideMenuHistory {
  private router = inject(Router);
  protected searchService = inject(SearchService);

  removeAndRedirect(query: string): void {
    this.searchService.removeCachedQuery(query);

    if (this.router.url.includes(query)) {
      const keys: string[] = this.searchService.history();

      if (keys.length > 0) {
        this.router.navigate(['history', keys[0]]);
      } else {
        this.router.navigate(['search']);
      }
    }
  }
}

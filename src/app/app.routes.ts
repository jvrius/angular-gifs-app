import { Routes } from '@angular/router';
import { TrendingPage } from './pages/trending-page/trending-page';
import { SearchPage } from './pages/search-page/search-page';
import { HistoryPage } from './pages/history-page/history-page';

export const routes: Routes = [
  {
    path: 'trending',
    component: TrendingPage,
  },
  {
    path: 'search',
    component: SearchPage,
  },
  {
    path: "history/:query",
    component: HistoryPage,
  },
  {
    path: '**',
    redirectTo: 'trending',
  },
];

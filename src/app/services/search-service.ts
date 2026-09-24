import { computed, effect, Service, signal } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { environment } from '../../environments/environment';
import type { Giphy } from '../interfaces/giphy';
import { type Gif, toGif } from '../interfaces/gif';

function loadFromLocalStorage() {
  return JSON.parse(localStorage.getItem('history') ?? '{}');
}

@Service()
export class SearchService {
  query = signal<string>('');
  historyCache = signal<Record<string, Gif[]>>(loadFromLocalStorage());
  historyKeys = computed(() => Object.keys(this.historyCache()));

  gifs = httpResource<Gif[]>(
    () => {
      if (!this.query()) return undefined;

      return {
        url: `${environment.giphyBaseUrl}/search`,
        params: {
          api_key: environment.giphyApiKey,
          q: this.query(),
          limit: 50,
        },
      };
    },
    {
      parse: (response): Gif[] => {
        const key: string = this.query().replaceAll(' ', '-');
        const value: Gif[] = (response as Giphy).data.map(toGif);

        this.historyCache.update((history) => ({
          ...history,
          [key]: value,
        }));
        return value;
      },
    },
  );

  saveHistoryToLocalStorage = effect(() => {
    localStorage.setItem('history', JSON.stringify(this.historyCache()));
  });

  getFromCache(query: string): Gif[] {
    return this.historyCache()[query] ?? [];
  }

  removeFromCache(query: string): void {
    this.historyCache.update((history) => {
      const newCache = { ...history };
      delete newCache[query];
      return newCache;
    });
  }
}

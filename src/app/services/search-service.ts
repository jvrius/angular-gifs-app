import { computed, effect, Service, signal } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { environment } from '../../environments/environment';
import type { Giphy } from '../interfaces/giphy';
import { type Gif, toGif } from '../interfaces/gif';

function loadCacheFromLocalStorage() {
  return JSON.parse(localStorage.getItem('cache') ?? '{}');
}

@Service()
export class SearchService {
  query = signal<string>('');
  cache = signal<Record<string, Gif[]>>(loadCacheFromLocalStorage());
  history = computed(() => Object.keys(this.cache()));

  gifs = httpResource(() => {
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
        const value: Gif[] = (response as Giphy).data.map(toGif);
        const key: string = this.query().replaceAll(' ', '-');

        this.cache.update((history) => ({
          ...history,
          [key]: value,
        }));
        return value;
      },
    },
  );

  saveCacheToLocalStorage = effect(() => {
    localStorage.setItem('cache', JSON.stringify(this.cache()));
  });

  loadCachedQuery(query: string): Gif[] {
    return this.cache()[query] ?? [];
  }

  removeCachedQuery(query: string): void {
    this.cache.update((history) => {
      const newCache = { ...history };
      delete newCache[query];
      return newCache;
    });
  }
}

import { Service } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { environment } from '../../environments/environment';
import type { Giphy } from '../interfaces/giphy';
import { type Gif, toGif } from '../interfaces/gif';

@Service()
export class TrendingService {
  gifs = httpResource<Gif[]>(
    () => ({
      url: `${environment.giphyBaseUrl}/trending`,
      params: {
        api_key: environment.giphyApiKey,
        limit: 50,
      },
    }),
    {
      parse: (value) => (value as Giphy).data.map(toGif),
    },
  );
}

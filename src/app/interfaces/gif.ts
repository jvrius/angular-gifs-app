import type { Data } from './giphy';

export interface Gif {
  id: string;
  title: string;
  url: string;
  width: string;
  height: string;
}

export function toGif(data: Data): Gif {
  return {
    id: data.id,
    title: data.title,
    url: data.images.original.url,
    width: data.images.original.width,
    height: data.images.original.height,
  };
}

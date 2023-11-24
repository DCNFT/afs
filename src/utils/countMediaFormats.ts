import { Composition, MediaElement } from '@/api/internal/abs/types';

export type MediaCount = {
  media: number;
  text: number;
  logo: number;
  composition: number;
};

export const countMediaFormats = (compositions: Composition[]): MediaCount => {
  let mediaCount: MediaCount = { media: 0, text: 0, logo: 0, composition: 0 };
  if (compositions?.length === 0) return mediaCount;
  compositions?.forEach((composition) => {
    composition?.media.forEach((mediaElement: MediaElement) => {
      if (mediaElement.format === 'MEDIA') {
        mediaCount.media += 1;
      } else if (mediaElement.format === 'TEXT') {
        mediaCount.text += 1;
      } else if (mediaElement.format === 'LOGO') {
        mediaCount.logo += 1;
      }
    });
  });
  mediaCount.composition = compositions?.length ? compositions?.length : 0;

  return mediaCount;
};

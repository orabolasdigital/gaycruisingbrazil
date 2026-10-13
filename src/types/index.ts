export type Language = 'en' | 'pt';

export interface NavItem {
  id: string;
  path: string;
  labelEn: string;
  labelPt: string;
}

export interface EditorialItem {
  id: string;
  categoryEn: string;
  categoryPt: string;
  titleEn: string;
  titlePt: string;
  subtitleEn: string;
  subtitlePt: string;
  descriptionEn: string;
  descriptionPt: string;
  locationEn: string;
  locationPt: string;
  meta: string;
  badge?: string;
  imageUrl?: string;
  aspectRatio?: '2:3' | '16:9';
}

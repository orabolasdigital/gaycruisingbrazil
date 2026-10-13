export type Language = 'en' | 'pt';

export interface NavItem {
  id: string;
  path: string;
  labelEn: string;
  labelPt: string;
}

export interface Region {
  id: string;
  slug: string;
  nameEn: string;
  namePt: string;
}

export interface BrazilianState {
  stateCode: string;
  stateNameEn: string;
  stateNamePt: string;
  slug: string;
  regionId: string;
  capitalEn: string;
  capitalPt: string;
  imageUrl?: string;
}

export interface VenueCategory {
  id: string;
  slug: string;
  nameEn: string;
  namePt: string;
  descriptionEn: string;
  descriptionPt: string;
}

export interface Venue {
  id: string;
  slug: string;
  name: string;
  categoryId: string; // 'gay-saunas' | 'sex-clubs' | 'cruising-bars' | 'adult-cabins'
  regionId: string;
  stateCode: string;
  city: string;
  descriptionEn: string;
  descriptionPt: string;
  coverImageUrl?: string;
  galleryUrls?: string[];
  address?: string;
  websiteUrl?: string;
  socialUrl?: string;
  openingHoursEn?: string;
  openingHoursPt?: string;
  officialEventFeedUrl?: string;
  operationalStatus?: 'open' | 'temporary_closed';
  ageRating: '18+';
  featuresEn?: string[];
  featuresPt?: string[];
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

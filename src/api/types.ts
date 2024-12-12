export interface Video {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  src: VideoSrc;
}

export interface VideoSrc {
  id: number;
  documentId: string;
  name: string;
  alternativeText: any;
  caption: any;
  width: any;
  height: any;
  formats: any;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Clinic {
  id: number;
  documentId: string;
  name: string;
  adress: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: Image;
}

export interface ClinicScreen {
  id: number;
  documentId: string;
  title_row1: string;
  title_row2: string;
  description: string;
  tag: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  zurab_image: Image;
}

export interface ConsultationScreen {
  id: number;
  documentId: string;
  title_row1: string;
  title_row2: string;
  tag: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  consultation_button: Button;
  description: string;
  image: Image;
  desktopImage: Image;
}

export interface Contact {
  id: number;
  documentId: string;
  text: string;
  link: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Goal {
  id: number;
  documentId: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: Image;
}

export interface GoalsScreen {
  id: number;
  documentId: string;
  title_row1: string;
  tag: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title_row2: string;
}

export interface MainScreen {
  id: number;
  documentId: string;
  title_row_1: string;
  title_row_2: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  service_button: Button;
  consultation_button: Button;
  background: Image;
}

export interface Price {
  id: number;
  documentId: string;
  name: string;
  price: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  service: IService;
}

export interface ResultScreen {
  id: number;
  documentId: string;
  title: string;
  tag: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  instagram_button: Button;
  image: Image;
  desktopImage: Image;
}

export interface Room {
  id: number;
  documentId: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: Image;
  room_advantages: RoomAdvantage[];
}

export interface RoomAdvantage {
  id: number;
  documentId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  room: Room;
}

export interface RoomScreen {
  id: number;
  documentId: string;
  title_row1: string;
  title_row2: string;
  tag: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ServiceScreen {
  id: number;
  documentId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  all_service_button: Button;
}

export interface VisualizationScreen {
  id: number;
  documentId: string;
  title: string;
  tag: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  consultation_button: Button;
  image: Image;
}

export interface Taplink {
  id: number;
  documentId: string;
  text: string;
  link: string;
  color: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface IService {
  id: number;
  documentId: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  hasBackground: boolean;
  image: Image;
  type: string;
}

export interface NavigationItem {
  id: number;
  documentId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  isExternal: boolean;
  link: string;
}

export interface FaqScreen {
  id: number;
  documentId: string;
  title_row1: string;
  title_row2: string;
  tag: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Button {
  id: number;
  text: string;
  link: string;
  isArrow: boolean;
  isExternal: boolean;
}

export interface Image {
  id: number;
  documentId: string;
  name: string;
  alternativeText: any;
  caption: any;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Formats {
  thumbnail: Thumbnail;
}

export interface Thumbnail {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

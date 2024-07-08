import { StaticImageData } from 'next/image';

export type Testimonial = {
  quote: string;
  authorImage: StaticImageData;
  authorName: string;
  authorRole: string;
};
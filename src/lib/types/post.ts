import { User } from './user';
export type PartialPost = {
  id: string;
  title: string;
  short_description: string;
  thumbnail: string;
  user: User;
  url_slug: string;
  is_private: boolean;
  released_at: string;
  updated_at: string;
  tags: string[];
  comments_count: number;
  likes: number;
};

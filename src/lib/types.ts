import type { Icons } from "@/components/icons";

export interface Movie {
  title: string;
  year: string;
  genre: string[];
  country: string[];
  imdb_rating: number;
  oscar_nominations: number;
  oscar_winning: number;
  cast: string[];
  language: string[];
  oscar_nominations_list: string[];
  oscar_winning_list: string[];
}

export interface NavItem {
  title: string;
  url: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
  isActive?: boolean;
}

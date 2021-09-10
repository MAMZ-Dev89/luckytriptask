import { CommonInfo } from './shared-info.interface';
import { Description } from "./description.interface";
import { Thumbnail } from "./thumbnail.interface";

export interface Activity extends CommonInfo {
  destination_id: number;
  name: string;
  currency_code: string;
  start_day: string;
  start_year: string;
  start_month: string;
  end_day: string;
  end_year: string;
  end_month: string;
  start_timestamp: string;
  end_timestamp: string;
  minimum_days: number;
  price: number;
  type: string;
  booking_url: string;
  tripadvisor_url: string;
  is_enabled: string;
  provider: string;
  thumbnail: Thumbnail;
  description: Description;
  top_fives_position: number;
}

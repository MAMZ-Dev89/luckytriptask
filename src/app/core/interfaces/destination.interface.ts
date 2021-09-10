import { CommonInfo } from './shared-info.interface';
import { Description } from "./description.interface";
import { Thumbnail } from "./thumbnail.interface";

export interface Destination extends CommonInfo {
  airport_name: string;
  iata_code?: string;
  iata_parent_id?: number;
  is_enabled?: string;
  temperature?: number;
  original_destination_id?: number;
  thumbnail?: Thumbnail;
  description?: Description;
  top_fives_new_flag?: number;
  top_fives_updated_flag?: number;
  image_url: string;
}


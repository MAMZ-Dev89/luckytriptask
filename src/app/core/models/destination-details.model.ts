import { Activity } from "../interfaces/activity.interface";
import { Destination } from "../interfaces/destination.interface";

export class DestinationDetails {
  destination: Destination = {
    id: 0,
    airport_name: '',
    city: '',
    country_code: '',
    country_name: '',
    image_url: ''
  };
  activities: Activity[] = [];
}

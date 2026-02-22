import { LatLngTuple } from "leaflet";
import { Label } from "./label";
import { CountryCode, RegionCode } from "./places";

export type Store = {
  name: string;
  slug: string;
  position: LatLngTuple;
  image: string;
  description: Label;
  phone: string;
  website: string;
  features: StoreFeature[];
  address: {
    street: string;
    city: string;
    zone: number;
    region: RegionCode;
    country: CountryCode;
  };
};

export enum StoreFeature {
  ONLINE_STORE = 0,
  BUY_GAMES = 1,
  REPAIR = 2,
  RESURFACING = 3,
  BATTERY_REPLACEMENT = 4,
}

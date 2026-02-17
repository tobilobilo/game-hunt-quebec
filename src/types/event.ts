import { Label } from "./label";
import { CountryCode, RegionCode } from "./places";

export type Event = {
  name: Label,
  image: string,
  description: Label,
  date: string,
  website: string,
  address: {
    street: string,
    city: string,
    zone: number,
    region: RegionCode,
    country: CountryCode
  }
};
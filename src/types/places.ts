import { Label } from "./label"

export type CountryCode = 'CA' | 'US';

export type Country = {
  code: CountryCode,
  name: Label
}

export type RegionCode = 'QC' | 'ON';

export type Region = {
    code: RegionCode,
    name: Label
}

export type Regions = Record<CountryCode, Region[]>;

export type Zone = {
    code: number,
    name: Label
}

export type Zones = Record<RegionCode, Zone[]>;

export type Places = {
    countries: Country[],
    regions: Regions,
    zones: Zones
}
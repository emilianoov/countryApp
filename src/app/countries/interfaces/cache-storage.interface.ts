import { Country } from "./country";
import { Region } from "./region.type";



export interface CacheSorage {
    byCapital: TermCountries;
    byCountries: TermCountries;
    byRegion: RegionContries;
}

export interface TermCountries {

    term: string;
    countries: Country[];
    
}

export interface RegionContries{
    region: Region;
    countries: Country[];
}
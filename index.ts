import * as _ from "lodash";

let geo = require("geolib");

interface IBoundary {

    latitude: number;
    longitude: number;

}

interface IGeocodes {
    name: string;
    provinces: IGeo[];
    cities: ICity[];
    state: string;
    country: string;
    subcontinent: string;
    continent: string;
}



interface ICity {
    nativeName: string;
    latitude: number;
    longitude: number;
    zipcode: number;
    cityCode: string;
    state: string;
    country: string;
    isoLang: string;
    tz: string;
    currency: string;
    currencySymbol: string;
    distance?: number;
    subcontinent:string;
    continent:string;
    region:string;
}

interface IGeo {
    nativeName: string;
    zipcode: string;
    cities: ICity[];
    main: ICity;
    latitude: number;
    longitude: number;

}


interface Istate {
    regions: IGeocodes[];
    boundaries: IBoundary[];
    capital: ICity;
    nativeName: string;
    latlng: number[];
    isoLang: string[];
    name: string;
    tz: string;
    country:string;
    subcontinent:string;
    continent:string;

}

interface ICountry {
    states: Istate[];
    name: string;
    boundaries: IBoundary[];
    nativeName: string;
    capital: ICity;
    currencies: string[];
    isoLang: string[];
    latlng: number[];
    tz: string;
    subcontinent:string;
    continent:string;

}

interface ISubcontinent {

    name: string;
    countries: ICountry[];
    boundaries: IBoundary[];
    continent:string;
}

interface IGeobuild {

    name: string;
    subcontinents: ISubcontinent[];
    boundaries: IBoundary[];

}



let world: IGeobuild[] = require("./world.json");

export default function Comuni() {

return world

}
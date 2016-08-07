import * as fs from "fs";
import * as async from "async";
import * as _ from "lodash";

let Comuni: IComune[] = require("./comuni.json");

let Regioni: IGeocodes[] = require("./regioni.json");

let countries = require("countryjs");

let Countries: ICountryjs[] = countries.all();




interface IGeocodes {
    name: string;
    provinces: IGeo[];
    cities: ICity[]
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
    subcontinent: string;
    continent: string;
    region: string;
}

interface IGeo {
    nativeName: string;
    zipcode: string;
    cities: ICity[];
    main: ICity;
    latitude: number;
    longitude: number;

}

interface IComune {
    nome: string;
    codice: number;
    latitude: number;
    longitude: number;
    zona: {
        nome: string;
        codice: number;
    },
    regione: {
        codice: number;
        nome: string;
    },
    cm: {
        codice: string;
        nome: string;
    },
    provincia: {
        codice: number;
        nome: string;
    },
    sigla: string;
    codiceCatastale: string;
    cap: number;
    state: string;
    country: string;
    zipcode: string;

}

interface IBoundary {

    latitude: number;
    longitude: number;

}

interface IgeoJSONfeatures {
    "type": string;
    "id": string;
    "properties": {
        name: string;
    },
    "geometry": {
        type: string;
        coordinates: [
            IBoundary[]
        ]
    }
}

interface ICountryjs {
    name: string;
    altSpellings: string[];
    area: number;
    "borders": string[];
    callingCodes: string[];
    capital: string;
    currencies: string[];
    demonym: string;
    flag: string;
    geoJSON: {
        type: string;
        features: IgeoJSONfeatures[];
    };
    ISO: {
        2: string;
        3: string;
        alpha2: string;
        alpha3: string;
    };
    languages: string[];
    latlng: number[];
    nativeName: string;
    population: number;
    provinces: string[];
    region: string;
    subregion: string;
    timezones: string[];
    "tld": string[];
    "translations": {
        de: string;
        es: string;
        fr: string;
        ja: string;
        it: string;
    };
    wiki: string;
}


const all = Countries;
const tests = [all[0], all[1]];

const use = all;


interface Istate {
    regions: IGeocodes[];
    boundaries: IBoundary[][];
    capital: ICity;
    nativeName: string;
    latlng: number[];
    isoLang: string[];
    name: string;
    tz: string[];
    country: string;
    subcontinent: string;
    continent: string;

}

interface ICountry {
    states: Istate[];
    name: string;
    boundaries: IBoundary[][];
    nativeName: string;
    capital: ICity;
    currencies: string[];
    isoLang: string[];
    latlng: number[];
    tz: string[];
    subcontinent: string;
    continent: string;

}

interface ISubcontinent {

    name: string;
    countries: ICountry[];
    boundaries: IBoundary[];
}

interface IGeobuild {

    name: string;
    subcontinents: ISubcontinent[];
    boundaries: IBoundary[];

}



const Geobuilds: IGeobuild[] = [];



const continents: IGeobuild[] = []


let continent_exists = false;
let subcontinent_exists = false;
let country_exists = false;


_.map(use, function (countryjs) {


    continent_exists = false;

    let bcords = [];

    if (countryjs.geoJSON && countryjs.geoJSON.features && countryjs.geoJSON.features[0] && countryjs.geoJSON.features[0].geometry && countryjs.geoJSON.features[0].geometry.coordinates) {
        bcords =countryjs.geoJSON.features[0].geometry.coordinates;
}

    let Capital: ICity;
    let Country: ICountry = { tz: countryjs.timezones, subcontinent: countryjs.subregion, continent: countryjs.region, capital: Capital, latlng: countryjs.latlng, nativeName: countryjs.nativeName, name: countryjs.name, states: [], boundaries: bcords, currencies: countryjs.currencies, isoLang: countryjs.languages }
    if (Country.name === "Italy") {
        _.map(Regioni, function (p) {
            _.map(p.cities, function (t) {
                if (t.nativeName === "Roma") {
                    console.log("Roma")
                    Country.tz = ["Europe/Rome"];
                    Country.states.push({
                        country: "Italy",
                        continent: countryjs.region,
                        subcontinent: countryjs.subregion,
                        name: "Italy",
                        nativeName: "Italia",
                        latlng: Country.latlng,
                        regions: Regioni,
                        boundaries: Country.boundaries,
                        capital: t,
                        isoLang: Country.isoLang,
                        tz: Country.tz
                    })
                }
            })
        })
    }
    let Subcontinent: ISubcontinent = { name: countryjs.subregion, countries: [Country], boundaries: [] }

    let Continent: IGeobuild = { name: countryjs.region, subcontinents: [Subcontinent], boundaries: [] }


    _.map(continents, function (continent) {

        subcontinent_exists = false;


        if (continent.name === Continent.name) {
            continent_exists = true;
            _.map(continent.subcontinents, function (subcontinent) {


                if (subcontinent.name === Subcontinent.name) {
                    subcontinent_exists = true;
                    country_exists = false;
                    _.map(subcontinent.countries, function (country) {


                        if (country.name === Country.name) {
                            country_exists = true;
                        }
                    })

                    if (!country_exists) {

                        console.log("country")

                        subcontinent.countries.push(Country)
                    }
                }

            })


            if (!subcontinent_exists) {
                console.log("subcontinent_exists")

                continent.subcontinents.push(Subcontinent)
            }

        }


    })


    if (!continent_exists) {

        continents.push(Continent)
        console.log("subcontinent_exists")

    }


})


fs.writeFile("./world.json", JSON.stringify(continents), { encoding: "utf-8" }, function (err) {
    if (err) {
        console.log(err)
    } else {
    }

})
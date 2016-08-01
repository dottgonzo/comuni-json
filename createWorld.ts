
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



interface IgeoJSONfeatures {
    "type": string;
    "id": string;
    "properties": {
        name: string;
    },
    "geometry": {
        type: string;
        coordinates: [
            number[][]
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

let Comuni: IComune[] = require("./comuni.json");

let Regioni: IGeo[] = require("./regioni.json").regioni;

let countries = require("countryjs");

let Countries: ICountryjs[] = countries.all();
import * as fs from "fs";
import * as async from "async";


const all = Countries;
const tests = [all[0], all[1]];

const use = tests;

interface ISubregion {

    name: string;

}

interface IGeobuild {

    name: string;
    subregions: ISubregion[];

}



const Geobuilds: IGeobuild[] = [];

console.log(JSON.stringify(tests))

let world: IGeobuild[] = []

_.map(use, function (country) {

    let region_exists = false;
    let subregion_exists = false;

    _.map(world, function (region) {
        if (region.name === country.region) {
            region_exists = true;
            _.map(region.subregions, function (subregion) {
                if (subregion.name === country.subregion) {
                    subregion_exists = true;


                }


            })

        }


    })
    if (!region_exists) {
        let region = { name: country.region, subregions:[] }
        world.push(region)
    }
})


fs.writeFile("./world.json", JSON.stringify(world), { encoding: "utf-8" }, function (err) {
    if (err) {
        console.log(err)
    } else {
    }

})
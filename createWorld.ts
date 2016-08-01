




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


const all = Countries;
const tests = [all[0], all[1]];

const use = tests;

interface Istate {
    regions: IGeocodes[];
    boundaries: IBoundary[];
    capital: ICity;
    nativeName: string;
    latlng: number[];
    isoLang: string[];
    name: string;
    tz: string;

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

_.map(use, function (countryjs) {
    let continent_exists = false;


    let capital: ICity;
    let country: ICountry = { tz: "", capital: capital, latlng: countryjs.latlng, nativeName: countryjs.nativeName, name: countryjs.name, states: [], boundaries: [], currencies: countryjs.currencies, isoLang: countryjs.languages }
    if (country.name === "Afghanistan") {
        _.map(Regioni, function (p) {
            _.map(p.cities, function (t) {
                if (t.nativeName === "Roma") {
                    console.log("Roma")

                    country.states.push({
                        name: country.name,
                        nativeName: country.nativeName,
                        latlng: country.latlng,
                        regions: Regioni,
                        boundaries: [],
                        capital: t,
                        isoLang: country.isoLang,
                        tz: country.tz
                    })
                }
            })
        })
    }
    let subcontinent: ISubcontinent = { name: countryjs.subregion, countries: [country], boundaries: [] }

    let continent: IGeobuild = { name: countryjs.region, subcontinents: [subcontinent], boundaries: [] }


    _.map(continents, function (cont) {

        let subcontinent_exists = false;


        if (cont.name === continent.name) {
            continent_exists = true;
            _.map(cont.subcontinents, function (sub) {


                if (sub.name === subcontinent.name) {
                    subcontinent_exists = true;
                    let country_exists = false;
                    _.map(sub.countries, function (co) {


                        if (co.name === country.name) {
                            country_exists = true;


                        }



                    })

                    if (!country_exists) {



                        subcontinent.countries.push(country)

                    }

                }



            })
            if (!subcontinent_exists) {

                continent.subcontinents.push(subcontinent)
            }

        }


    })


    if (!continent_exists) {

        continents.push(continent)
    }


})


fs.writeFile("./world.json", JSON.stringify(continents), { encoding: "utf-8" }, function (err) {
    if (err) {
        console.log(err)
    } else {
    }

})
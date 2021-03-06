
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

interface IRegione {
    nome: string;
    capoluoghi: string[];
    province: string[];
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



let Comuni: IComune[] = require("./comuni.json");

let Regioni: IRegione[] = require("./regioni.1.json").regioni;
let Geocodes: IGeocodes[] = [];

import * as _ from "lodash";
import * as fs from "fs";

const all = Regioni;
const tests = [all[0], all[1], all[2]];

const use = all;
// you can use Google options to manage result format 

_.map(use, function (r, ri) {
    let region: IGeocodes = { cities: [], provinces: [], name: r.nome, state: "Italy", subcontinent: 'Southern Europe', continent: "Europe",country:"Italy" };

    _.map(r.province, function (p, pi) {
        let province: IGeo = {
            zipcode: p,
            cities: [],
            nativeName: "",
            main: {
                nativeName: "",
                latitude: 0,
                longitude: 0,
                zipcode: 0,
                cityCode: "",
                state: "Italy",
                country: "Italy",
                isoLang: "it",
                currency: "euro",
                tz: "Europe/Rome",
                region: r.nome,
                currencySymbol: "€",
                continent:"Europe",
                subcontinent:"Southern Europe"
            },
            latitude: 0,
            longitude: 0
        }



        _.map(Comuni, function (c, ci) {
            if (c.sigla === p) {
                let city: ICity = {
                    cityCode: c.sigla,
                    nativeName: c.nome,
                    latitude: c.latitude,
                    longitude: c.longitude,
                    zipcode: c.cap,
                    state: "Italy",
                    country: "Italy",
                    isoLang: "it",
                    region: r.nome,
                    currencySymbol: "€",
                    currency: "Euro",
                    tz: "Europe/Rome",
                    subcontinent: 'Southern Europe',
                    continent: "Europe"
                };
                province.cities.push(city)

                _.map(r.capoluoghi, function (ca, cai) {
                    if (ca === c.nome) {
                        province.nativeName = ca;
                        province.main = city
                        region.cities.push(city)
                    }
                })
            }

        })
        region.provinces.push(province)

    })

    Geocodes.push(region)

})

fs.writeFileSync("./regioni.json", JSON.stringify(Geocodes), { encoding: "utf-8" })


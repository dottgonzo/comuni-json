
interface ICity {
    name: string;
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
    name: string;
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
    towns: IGeo[];
    cities: ICity[]
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
const test = [Regioni[0], Regioni[1], Regioni[2]];

const use = all;
// you can use Google options to manage result format 

_.map(use, function (r, ri) {
    let region = { cities: [], towns: [], name: r.nome };

    _.map(r.province, function (p, pi) {
        let province: IGeo = {
            zipcode: p,
            cities: [],
            name: "",
            main: {
                name: "",
                latitude: 0,
                longitude: 0,
                zipcode: 0,
                cityCode: "",
                state: "",
                country: "",
                isoLang: "",
                currency: "",
                tz: "",
                currencySymbol: ""
            },
            latitude: 0,
            longitude: 0
        }



        _.map(Comuni, function (c, ci) {
            if (c.sigla === p) {
                let city: ICity = {
                    cityCode: c.sigla,
                    name: c.nome,
                    latitude: c.latitude,
                    longitude: c.longitude,
                    zipcode: c.cap,
                    state: c.state,
                    country: c.country,
                    isoLang: "it",
                    currencySymbol: "€",
                    currency: "Euro",
                    tz: "Europe/Rome"
                };
                province.cities.push(city)

                _.map(r.capoluoghi, function (ca, cai) {
                    if (ca === c.nome) {
                        province.name = ca;
                        province.main = city
                        region.cities.push(city)
                    }
                })
            }

        })
        region.towns.push(province)

    })

    Geocodes.push(region)

})

fs.writeFileSync("./regioni.json", JSON.stringify(Geocodes), { encoding: "utf-8" })


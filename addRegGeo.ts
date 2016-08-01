
interface ICity {
    city: string;
    latitude: number;
    longitude: number;
    cap: number;
}

interface IGeo {
    city: string;
    code: string;
    cities: ICity[];
    main: ICity;
    latitude: number;
    longitude: number;

}

interface IRegione {
    nome: string;
    capoluoghi: string[];
    province: string[];
    geo: IGeo[];
    geoMain: ICity[]
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
}



let Comuni: IComune[] = require("./comuni.json");

let Regioni: IRegione[] = require("./regioni.1.json").regioni;

import * as _ from "lodash";
import * as fs from "fs";

const all = Regioni;
const test = [Regioni[0], Regioni[1], Regioni[2]];

const use = all;
// you can use Google options to manage result format 

_.map(use, function (r, ri) {

    r.geo = [];
    r.geoMain = [];
    _.map(r.province, function (p, pi) {
        let province: IGeo = {
            code: p,
            cities: [],
            city: "",
            main: {
                city: "",
                latitude: 0,
                longitude: 0,
                cap: 0,
            },
            latitude: 0,
            longitude: 0
        }



        _.map(Comuni, function (c, ci) {
            if (c.sigla === p) {
                let city = { city: c.nome, latitude: c.latitude, longitude: c.longitude, cap: c.cap };
                province.cities.push(city)

                _.map(r.capoluoghi, function (ca, cai) {
                    if (ca === c.nome) {
                        province.city = ca;
                        province.main = city
                        r.geoMain.push(city)
                    }
                })
            }

        })
        r.geo.push(province)

    })


})

fs.writeFileSync("./regioni.json", JSON.stringify(use), { encoding: "utf-8" })


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

import * as _ from "lodash";
import * as async from "async";
import * as fs from "fs";

let geocoder = require("search-google-geocode");
// you can use Google options to manage result format 
var options = {
    language: 'it'
};
const all = Comuni;
const test = [all[0], all[3], all[4]]

// use callback to return result from geocoding process

const use = all;

// address geocoding
// reverse geocoding
async.eachSeries(use, function (iterate, cb) {


    function callbackGeo(error, result) {
        if (error) {
            console.log(error)
        } else {
            if (result && result.length && result[0]) {
                _.map(Object.keys(result[0]), function (k) {
                    iterate[k] = result[0][k]
                })
                fs.writeFileSync("./comuni.json", JSON.stringify(use), { encoding: "utf-8" })
                console.log("ok " + iterate.nome + " " + iterate.sigla)

            } else {
                console.warn("WARN " + iterate.nome + " " + iterate.sigla)
            }
        }; // on success
        cb()
    }


    if (!iterate.latitude) {
        //console.log('todo '+c.nome);
        geocoder.geocode(iterate.nome, callbackGeo, options);

    } else {
        console.log("exists " + iterate.nome)
        cb()

    }


}, function (err) {
    if (err) {

    } else {
        console.log("ok")
    }
})

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

const use = [];

_.map(all, function (i) {
    if (!i.latitude) {
        //console.log('todo '+c.nome);
        use.push(i);

    } else {
     //   console.log("exists " + i.nome)



    }
})

// address geocoding
// reverse geocoding
async.eachSeries(use, function (iterate, cb) {


    function callbackGeo(error, result) {
        if (error) {
            console.log(error)
            cb()

        } else {
            if (result && result.length && result[0]) {
                _.map(Object.keys(result[0]), function (k) {
                    iterate[k] = result[0][k]
                })
                fs.writeFile("./comuni.json", JSON.stringify(use), { encoding: "utf-8" }, function (err) {
                    if (error) {
                        console.log(error)
                    } else {
                    }
                    cb()

                })
                console.log("ok " + iterate.nome + " " + iterate.sigla)

            } else {
                console.warn("WARN " + iterate.nome + " " + iterate.sigla)
                cb()

            }
        }; // on success
    }



    //console.log('todo '+c.nome);
    geocoder.geocode(iterate.nome, callbackGeo, options);




}, function (err) {
    if (err) {

    } else {
        console.log("ok")
    }
})

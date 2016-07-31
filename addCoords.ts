import Comuni from "./index";
import * as _ from "lodash";
import * as async from "async";
import * as fs from "fs";

let geocoder = require("search-google-geocode");
// you can use Google options to manage result format 
var options = {
    language: 'it'
};
let comuni = Comuni();
let test = [comuni[0], comuni[3], comuni[4]]

// use callback to return result from geocoding process


// address geocoding
// reverse geocoding
async.eachSeries(comuni, function (iterate, cb) {


    function callbackGeo(error, result) {
        if (error) {
            console.log(error)
        } else {
            if (result && result.length && result[0]) {
                _.map(Object.keys(result[0]), function (k) {
                    iterate[k] = result[0][k]
                })
            } else {
                console.warn(iterate.nome)
            }
        }; // on success
        cb()
    }


    if (!iterate.latitude) {
        //console.log('todo '+c.nome);
        geocoder.geocode(iterate.nome, callbackGeo, options);

    } else {
        cb()

    }


}, function (err) {
    if (err) {

    } else {

        fs.writeFileSync("./comuni.json", JSON.stringify(test), { encoding: "utf-8" })
    }
})

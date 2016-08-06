import Comuni from "./index"

import * as _ from "lodash";


import * as fs from "fs";


const w = Comuni();


_.map(w, function (continent) {
    _.map(continent.subcontinents, function (subcontinent) {
        _.map(subcontinent.countries, function (country) {
            country.states = [];
        })
    })
})



fs.writeFile("./worldwithoutstates.json", JSON.stringify(w), { encoding: "utf-8" }, function (err) {
    if (err) {
        console.log(err)
    } else {
    }

})
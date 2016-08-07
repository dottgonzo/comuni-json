import * as _ from "lodash";
import Comuni from "./index";
import * as fs from "fs";


_.map(Comuni(), function (continent) {

    _.map(continent.subcontinents, function (subcontinent) {

        _.map(subcontinent.countries, function (c) {
            if (c.name === "Italy") {

                fs.writeFile("./italy.json", JSON.stringify(c.states[0]), { encoding: "utf-8" }, function (err) {
                    if (err) {
                        console.log(err)
                    } else {
                    }

                })

            }
        })
    })
})



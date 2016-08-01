import * as _ from "lodash";

let geo = require("geolib");

interface IBoundary {

    latitude: number;
    longitude: number;

}

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



let world: IGeobuild[] = require("./world.json");

export default class Localize {

    getPosition(o: { latitude: number, longitude: number, state?: string }) {

        if (!(o && o.latitude && o.longitude)) throw Error("Error");

        let _this = this;

        if (o.state) {
            let State = _this.getState(o.state)

            console.log(o);


        } else {
            console.log('todo');
            throw Error("todo");


        }



    }


    getLocation(o: { city: string, state?: string }) {
        return true

    }

    getinfo(o: { city: string, state?: string }) {
        return true
    }

    getState(state: string, o?: { continent?: string }): Istate | boolean {


        let exists = false;

        let answer;

        _.map(world, function (continent) {

            _.map(continent.subcontinents, function (subcontinent) {

                _.map(subcontinent.countries, function (country) {

                    _.map(country.states, function (s) {
                        console.log(s.name)
                        if (s.name === state) {
                            exists = true;
                            answer = s
                        }


                    })

                    if (!exists) {
                        answer = false

                    }
                })

            })

        })


        return answer

    }

    getCity(state, o: { continent?: string }) {
        return true

    }

}
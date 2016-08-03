"use strict";
var Comuni = require("./comuni.json");
var Regioni = require("./regioni.1.json").regioni;
var Geocodes = [];
var _ = require("lodash");
var fs = require("fs");
var all = Regioni;
var tests = [all[0], all[1], all[2]];
var use = all;
_.map(use, function (r, ri) {
    var region = { cities: [], provinces: [], name: r.nome, state: "Italy", subcontinent: 'Southern Europe', continent: "Europe", country: "Italy" };
    _.map(r.province, function (p, pi) {
        var province = {
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
                continent: "Europe",
                subcontinent: "Southern Europe"
            },
            latitude: 0,
            longitude: 0
        };
        _.map(Comuni, function (c, ci) {
            if (c.sigla === p) {
                var city_1 = {
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
                province.cities.push(city_1);
                _.map(r.capoluoghi, function (ca, cai) {
                    if (ca === c.nome) {
                        province.nativeName = ca;
                        province.main = city_1;
                        region.cities.push(city_1);
                    }
                });
            }
        });
        region.provinces.push(province);
    });
    Geocodes.push(region);
});
fs.writeFileSync("./regioni.json", JSON.stringify(Geocodes), { encoding: "utf-8" });

//# sourceMappingURL=data:application/json;base64,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QyxDQUFDLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxFQUFFLEdBQUc7b0JBQ2pDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDaEIsUUFBUSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7d0JBQ3pCLFFBQVEsQ0FBQyxJQUFJLEdBQUcsTUFBSSxDQUFBO3dCQUNwQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFJLENBQUMsQ0FBQTtvQkFDNUIsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQTtZQUNOLENBQUM7UUFFTCxDQUFDLENBQUMsQ0FBQTtRQUNGLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBRW5DLENBQUMsQ0FBQyxDQUFBO0lBRUYsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUV6QixDQUFDLENBQUMsQ0FBQTtBQUVGLEVBQUUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFBIiwiZmlsZSI6ImFkZFJlZ0dlby5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW50ZXJmYWNlIElDaXR5IHtcbiAgICBuYXRpdmVOYW1lOiBzdHJpbmc7XG4gICAgbGF0aXR1ZGU6IG51bWJlcjtcbiAgICBsb25naXR1ZGU6IG51bWJlcjtcbiAgICB6aXBjb2RlOiBudW1iZXI7XG4gICAgY2l0eUNvZGU6IHN0cmluZztcbiAgICBzdGF0ZTogc3RyaW5nO1xuICAgIGNvdW50cnk6IHN0cmluZztcbiAgICBpc29MYW5nOiBzdHJpbmc7XG4gICAgdHo6IHN0cmluZztcbiAgICBjdXJyZW5jeTogc3RyaW5nO1xuICAgIGN1cnJlbmN5U3ltYm9sOiBzdHJpbmc7XG4gICAgZGlzdGFuY2U/OiBudW1iZXI7XG4gICAgc3ViY29udGluZW50OiBzdHJpbmc7XG4gICAgY29udGluZW50OiBzdHJpbmc7XG4gICAgcmVnaW9uOiBzdHJpbmc7XG59XG5pbnRlcmZhY2UgSUdlbyB7XG4gICAgbmF0aXZlTmFtZTogc3RyaW5nO1xuICAgIHppcGNvZGU6IHN0cmluZztcbiAgICBjaXRpZXM6IElDaXR5W107XG4gICAgbWFpbjogSUNpdHk7XG4gICAgbGF0aXR1ZGU6IG51bWJlcjtcbiAgICBsb25naXR1ZGU6IG51bWJlcjtcblxufVxuXG5pbnRlcmZhY2UgSVJlZ2lvbmUge1xuICAgIG5vbWU6IHN0cmluZztcbiAgICBjYXBvbHVvZ2hpOiBzdHJpbmdbXTtcbiAgICBwcm92aW5jZTogc3RyaW5nW107XG59XG5pbnRlcmZhY2UgSUdlb2NvZGVzIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgcHJvdmluY2VzOiBJR2VvW107XG4gICAgY2l0aWVzOiBJQ2l0eVtdO1xuICAgIHN0YXRlOiBzdHJpbmc7XG4gICAgY291bnRyeTogc3RyaW5nO1xuICAgIHN1YmNvbnRpbmVudDogc3RyaW5nO1xuICAgIGNvbnRpbmVudDogc3RyaW5nO1xufVxuaW50ZXJmYWNlIElDb211bmUge1xuICAgIG5vbWU6IHN0cmluZztcbiAgICBjb2RpY2U6IG51bWJlcjtcbiAgICBsYXRpdHVkZTogbnVtYmVyO1xuICAgIGxvbmdpdHVkZTogbnVtYmVyO1xuICAgIHpvbmE6IHtcbiAgICAgICAgbm9tZTogc3RyaW5nO1xuICAgICAgICBjb2RpY2U6IG51bWJlcjtcbiAgICB9LFxuICAgIHJlZ2lvbmU6IHtcbiAgICAgICAgY29kaWNlOiBudW1iZXI7XG4gICAgICAgIG5vbWU6IHN0cmluZztcbiAgICB9LFxuICAgIGNtOiB7XG4gICAgICAgIGNvZGljZTogc3RyaW5nO1xuICAgICAgICBub21lOiBzdHJpbmc7XG4gICAgfSxcbiAgICBwcm92aW5jaWE6IHtcbiAgICAgICAgY29kaWNlOiBudW1iZXI7XG4gICAgICAgIG5vbWU6IHN0cmluZztcbiAgICB9LFxuICAgIHNpZ2xhOiBzdHJpbmc7XG4gICAgY29kaWNlQ2F0YXN0YWxlOiBzdHJpbmc7XG4gICAgY2FwOiBudW1iZXI7XG4gICAgc3RhdGU6IHN0cmluZztcbiAgICBjb3VudHJ5OiBzdHJpbmc7XG4gICAgemlwY29kZTogc3RyaW5nO1xuXG59XG5cblxuXG5sZXQgQ29tdW5pOiBJQ29tdW5lW10gPSByZXF1aXJlKFwiLi9jb211bmkuanNvblwiKTtcblxubGV0IFJlZ2lvbmk6IElSZWdpb25lW10gPSByZXF1aXJlKFwiLi9yZWdpb25pLjEuanNvblwiKS5yZWdpb25pO1xubGV0IEdlb2NvZGVzOiBJR2VvY29kZXNbXSA9IFtdO1xuXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJmc1wiO1xuXG5jb25zdCBhbGwgPSBSZWdpb25pO1xuY29uc3QgdGVzdHMgPSBbYWxsWzBdLCBhbGxbMV0sIGFsbFsyXV07XG5cbmNvbnN0IHVzZSA9IGFsbDtcbi8vIHlvdSBjYW4gdXNlIEdvb2dsZSBvcHRpb25zIHRvIG1hbmFnZSByZXN1bHQgZm9ybWF0IFxuXG5fLm1hcCh1c2UsIGZ1bmN0aW9uIChyLCByaSkge1xuICAgIGxldCByZWdpb246IElHZW9jb2RlcyA9IHsgY2l0aWVzOiBbXSwgcHJvdmluY2VzOiBbXSwgbmFtZTogci5ub21lLCBzdGF0ZTogXCJJdGFseVwiLCBzdWJjb250aW5lbnQ6ICdTb3V0aGVybiBFdXJvcGUnLCBjb250aW5lbnQ6IFwiRXVyb3BlXCIsY291bnRyeTpcIkl0YWx5XCIgfTtcblxuICAgIF8ubWFwKHIucHJvdmluY2UsIGZ1bmN0aW9uIChwLCBwaSkge1xuICAgICAgICBsZXQgcHJvdmluY2U6IElHZW8gPSB7XG4gICAgICAgICAgICB6aXBjb2RlOiBwLFxuICAgICAgICAgICAgY2l0aWVzOiBbXSxcbiAgICAgICAgICAgIG5hdGl2ZU5hbWU6IFwiXCIsXG4gICAgICAgICAgICBtYWluOiB7XG4gICAgICAgICAgICAgICAgbmF0aXZlTmFtZTogXCJcIixcbiAgICAgICAgICAgICAgICBsYXRpdHVkZTogMCxcbiAgICAgICAgICAgICAgICBsb25naXR1ZGU6IDAsXG4gICAgICAgICAgICAgICAgemlwY29kZTogMCxcbiAgICAgICAgICAgICAgICBjaXR5Q29kZTogXCJcIixcbiAgICAgICAgICAgICAgICBzdGF0ZTogXCJJdGFseVwiLFxuICAgICAgICAgICAgICAgIGNvdW50cnk6IFwiSXRhbHlcIixcbiAgICAgICAgICAgICAgICBpc29MYW5nOiBcIml0XCIsXG4gICAgICAgICAgICAgICAgY3VycmVuY3k6IFwiZXVyb1wiLFxuICAgICAgICAgICAgICAgIHR6OiBcIkV1cm9wZS9Sb21lXCIsXG4gICAgICAgICAgICAgICAgcmVnaW9uOiByLm5vbWUsXG4gICAgICAgICAgICAgICAgY3VycmVuY3lTeW1ib2w6IFwi4oKsXCIsXG4gICAgICAgICAgICAgICAgY29udGluZW50OlwiRXVyb3BlXCIsXG4gICAgICAgICAgICAgICAgc3ViY29udGluZW50OlwiU291dGhlcm4gRXVyb3BlXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsYXRpdHVkZTogMCxcbiAgICAgICAgICAgIGxvbmdpdHVkZTogMFxuICAgICAgICB9XG5cblxuXG4gICAgICAgIF8ubWFwKENvbXVuaSwgZnVuY3Rpb24gKGMsIGNpKSB7XG4gICAgICAgICAgICBpZiAoYy5zaWdsYSA9PT0gcCkge1xuICAgICAgICAgICAgICAgIGxldCBjaXR5OiBJQ2l0eSA9IHtcbiAgICAgICAgICAgICAgICAgICAgY2l0eUNvZGU6IGMuc2lnbGEsXG4gICAgICAgICAgICAgICAgICAgIG5hdGl2ZU5hbWU6IGMubm9tZSxcbiAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU6IGMubGF0aXR1ZGUsXG4gICAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZTogYy5sb25naXR1ZGUsXG4gICAgICAgICAgICAgICAgICAgIHppcGNvZGU6IGMuY2FwLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogXCJJdGFseVwiLFxuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5OiBcIkl0YWx5XCIsXG4gICAgICAgICAgICAgICAgICAgIGlzb0xhbmc6IFwiaXRcIixcbiAgICAgICAgICAgICAgICAgICAgcmVnaW9uOiByLm5vbWUsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sOiBcIuKCrFwiLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeTogXCJFdXJvXCIsXG4gICAgICAgICAgICAgICAgICAgIHR6OiBcIkV1cm9wZS9Sb21lXCIsXG4gICAgICAgICAgICAgICAgICAgIHN1YmNvbnRpbmVudDogJ1NvdXRoZXJuIEV1cm9wZScsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbmVudDogXCJFdXJvcGVcIlxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcHJvdmluY2UuY2l0aWVzLnB1c2goY2l0eSlcblxuICAgICAgICAgICAgICAgIF8ubWFwKHIuY2Fwb2x1b2doaSwgZnVuY3Rpb24gKGNhLCBjYWkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhID09PSBjLm5vbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpbmNlLm5hdGl2ZU5hbWUgPSBjYTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpbmNlLm1haW4gPSBjaXR5XG4gICAgICAgICAgICAgICAgICAgICAgICByZWdpb24uY2l0aWVzLnB1c2goY2l0eSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcbiAgICAgICAgcmVnaW9uLnByb3ZpbmNlcy5wdXNoKHByb3ZpbmNlKVxuXG4gICAgfSlcblxuICAgIEdlb2NvZGVzLnB1c2gocmVnaW9uKVxuXG59KVxuXG5mcy53cml0ZUZpbGVTeW5jKFwiLi9yZWdpb25pLmpzb25cIiwgSlNPTi5zdHJpbmdpZnkoR2VvY29kZXMpLCB7IGVuY29kaW5nOiBcInV0Zi04XCIgfSlcblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

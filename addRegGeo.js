"use strict";
var Comuni = require("./comuni.json");
var Regioni = require("./regioni.1.json").regioni;
var _ = require("lodash");
var fs = require("fs");
var all = Regioni;
var test = [Regioni[0], Regioni[1], Regioni[2]];
var use = all;
_.map(use, function (r, ri) {
    r.geo = [];
    r.geoMain = [];
    _.map(r.province, function (p, pi) {
        var province = {
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
        };
        _.map(Comuni, function (c, ci) {
            if (c.sigla === p) {
                var city_1 = { city: c.nome, latitude: c.latitude, longitude: c.longitude, cap: c.cap };
                province.cities.push(city_1);
                _.map(r.capoluoghi, function (ca, cai) {
                    if (ca === c.nome) {
                        province.city = ca;
                        province.main = city_1;
                        r.geoMain.push(city_1);
                    }
                });
            }
        });
        r.geo.push(province);
    });
});
fs.writeFileSync("./regioni.json", JSON.stringify(use), { encoding: "utf-8" });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZFJlZ0dlby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBc0RBLElBQUksTUFBTSxHQUFjLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUVqRCxJQUFJLE9BQU8sR0FBZSxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFFOUQsSUFBWSxDQUFDLFdBQU0sUUFBUSxDQUFDLENBQUE7QUFDNUIsSUFBWSxFQUFFLFdBQU0sSUFBSSxDQUFDLENBQUE7QUFFekIsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDO0FBQ3BCLElBQU0sSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUVsRCxJQUFNLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFHaEIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLEVBQUUsRUFBRTtJQUV0QixDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNYLENBQUMsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ2YsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxFQUFFLEVBQUU7UUFDN0IsSUFBSSxRQUFRLEdBQVM7WUFDakIsSUFBSSxFQUFFLENBQUM7WUFDUCxNQUFNLEVBQUUsRUFBRTtZQUNWLElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFO2dCQUNGLElBQUksRUFBRSxFQUFFO2dCQUNSLFFBQVEsRUFBRSxDQUFDO2dCQUNYLFNBQVMsRUFBRSxDQUFDO2dCQUNaLEdBQUcsRUFBRSxDQUFDO2FBQ1Q7WUFDRCxRQUFRLEVBQUUsQ0FBQztZQUNYLFNBQVMsRUFBRSxDQUFDO1NBQ2YsQ0FBQTtRQUlELENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxFQUFFLEVBQUU7WUFDekIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixJQUFJLE1BQUksR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ3RGLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQUksQ0FBQyxDQUFBO2dCQUUxQixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLEVBQUUsR0FBRztvQkFDakMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNoQixRQUFRLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQzt3QkFDbkIsUUFBUSxDQUFDLElBQUksR0FBRyxNQUFJLENBQUE7d0JBQ3BCLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQUksQ0FBQyxDQUFBO29CQUN4QixDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFBO1lBQ04sQ0FBQztRQUVMLENBQUMsQ0FBQyxDQUFBO1FBQ0YsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFFeEIsQ0FBQyxDQUFDLENBQUE7QUFHTixDQUFDLENBQUMsQ0FBQTtBQUVGLEVBQUUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFBIiwiZmlsZSI6ImFkZFJlZ0dlby5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW50ZXJmYWNlIElDaXR5IHtcbiAgICBjaXR5OiBzdHJpbmc7XG4gICAgbGF0aXR1ZGU6IG51bWJlcjtcbiAgICBsb25naXR1ZGU6IG51bWJlcjtcbiAgICBjYXA6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIElHZW8ge1xuICAgIGNpdHk6IHN0cmluZztcbiAgICBjb2RlOiBzdHJpbmc7XG4gICAgY2l0aWVzOiBJQ2l0eVtdO1xuICAgIG1haW46IElDaXR5O1xuICAgIGxhdGl0dWRlOiBudW1iZXI7XG4gICAgbG9uZ2l0dWRlOiBudW1iZXI7XG5cbn1cblxuaW50ZXJmYWNlIElSZWdpb25lIHtcbiAgICBub21lOiBzdHJpbmc7XG4gICAgY2Fwb2x1b2doaTogc3RyaW5nW107XG4gICAgcHJvdmluY2U6IHN0cmluZ1tdO1xuICAgIGdlbzogSUdlb1tdO1xuICAgIGdlb01haW46IElDaXR5W11cbn1cblxuaW50ZXJmYWNlIElDb211bmUge1xuICAgIG5vbWU6IHN0cmluZztcbiAgICBjb2RpY2U6IG51bWJlcjtcbiAgICBsYXRpdHVkZTogbnVtYmVyO1xuICAgIGxvbmdpdHVkZTogbnVtYmVyO1xuICAgIHpvbmE6IHtcbiAgICAgICAgbm9tZTogc3RyaW5nO1xuICAgICAgICBjb2RpY2U6IG51bWJlcjtcbiAgICB9LFxuICAgIHJlZ2lvbmU6IHtcbiAgICAgICAgY29kaWNlOiBudW1iZXI7XG4gICAgICAgIG5vbWU6IHN0cmluZztcbiAgICB9LFxuICAgIGNtOiB7XG4gICAgICAgIGNvZGljZTogc3RyaW5nO1xuICAgICAgICBub21lOiBzdHJpbmc7XG4gICAgfSxcbiAgICBwcm92aW5jaWE6IHtcbiAgICAgICAgY29kaWNlOiBudW1iZXI7XG4gICAgICAgIG5vbWU6IHN0cmluZztcbiAgICB9LFxuICAgIHNpZ2xhOiBzdHJpbmc7XG4gICAgY29kaWNlQ2F0YXN0YWxlOiBzdHJpbmc7XG4gICAgY2FwOiBudW1iZXI7XG59XG5cblxuXG5sZXQgQ29tdW5pOiBJQ29tdW5lW10gPSByZXF1aXJlKFwiLi9jb211bmkuanNvblwiKTtcblxubGV0IFJlZ2lvbmk6IElSZWdpb25lW10gPSByZXF1aXJlKFwiLi9yZWdpb25pLjEuanNvblwiKS5yZWdpb25pO1xuXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJmc1wiO1xuXG5jb25zdCBhbGwgPSBSZWdpb25pO1xuY29uc3QgdGVzdCA9IFtSZWdpb25pWzBdLCBSZWdpb25pWzFdLCBSZWdpb25pWzJdXTtcblxuY29uc3QgdXNlID0gYWxsO1xuLy8geW91IGNhbiB1c2UgR29vZ2xlIG9wdGlvbnMgdG8gbWFuYWdlIHJlc3VsdCBmb3JtYXQgXG5cbl8ubWFwKHVzZSwgZnVuY3Rpb24gKHIsIHJpKSB7XG5cbiAgICByLmdlbyA9IFtdO1xuICAgIHIuZ2VvTWFpbiA9IFtdO1xuICAgIF8ubWFwKHIucHJvdmluY2UsIGZ1bmN0aW9uIChwLCBwaSkge1xuICAgICAgICBsZXQgcHJvdmluY2U6IElHZW8gPSB7XG4gICAgICAgICAgICBjb2RlOiBwLFxuICAgICAgICAgICAgY2l0aWVzOiBbXSxcbiAgICAgICAgICAgIGNpdHk6IFwiXCIsXG4gICAgICAgICAgICBtYWluOiB7XG4gICAgICAgICAgICAgICAgY2l0eTogXCJcIixcbiAgICAgICAgICAgICAgICBsYXRpdHVkZTogMCxcbiAgICAgICAgICAgICAgICBsb25naXR1ZGU6IDAsXG4gICAgICAgICAgICAgICAgY2FwOiAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxhdGl0dWRlOiAwLFxuICAgICAgICAgICAgbG9uZ2l0dWRlOiAwXG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgXy5tYXAoQ29tdW5pLCBmdW5jdGlvbiAoYywgY2kpIHtcbiAgICAgICAgICAgIGlmIChjLnNpZ2xhID09PSBwKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNpdHkgPSB7IGNpdHk6IGMubm9tZSwgbGF0aXR1ZGU6IGMubGF0aXR1ZGUsIGxvbmdpdHVkZTogYy5sb25naXR1ZGUsIGNhcDogYy5jYXAgfTtcbiAgICAgICAgICAgICAgICBwcm92aW5jZS5jaXRpZXMucHVzaChjaXR5KVxuXG4gICAgICAgICAgICAgICAgXy5tYXAoci5jYXBvbHVvZ2hpLCBmdW5jdGlvbiAoY2EsIGNhaSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2EgPT09IGMubm9tZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmluY2UuY2l0eSA9IGNhO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmluY2UubWFpbiA9IGNpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgIHIuZ2VvTWFpbi5wdXNoKGNpdHkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG4gICAgICAgIHIuZ2VvLnB1c2gocHJvdmluY2UpXG5cbiAgICB9KVxuXG5cbn0pXG5cbmZzLndyaXRlRmlsZVN5bmMoXCIuL3JlZ2lvbmkuanNvblwiLCBKU09OLnN0cmluZ2lmeSh1c2UpLCB7IGVuY29kaW5nOiBcInV0Zi04XCIgfSlcblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
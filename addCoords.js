"use strict";
var Comuni = require("./comuni.json");
var _ = require("lodash");
var async = require("async");
var fs = require("fs");
var geocoder = require("search-google-geocode");
var options = {
    language: 'it'
};
var all = Comuni;
var tests = [all[0], all[3], all[4]];
var use = [];
_.map(all, function (i) {
    if (!i.latitude) {
        use.push(i);
    }
    else {
    }
});
async.eachSeries(use, function (iterate, cb) {
    function callbackGeo(error, result) {
        if (error) {
            console.log(error);
            cb();
        }
        else {
            if (result && result.length && result[0]) {
                _.map(Object.keys(result[0]), function (k) {
                    iterate[k] = result[0][k];
                });
                fs.writeFile("./comuni.json", JSON.stringify(use), { encoding: "utf-8" }, function (err) {
                    if (error) {
                        console.log(error);
                    }
                    else {
                    }
                    cb();
                });
                console.log("ok " + iterate.nome + " " + iterate.sigla);
            }
            else {
                console.warn("WARN " + iterate.nome + " " + iterate.sigla);
                cb();
            }
        }
        ;
    }
    geocoder.geocode(iterate.nome, callbackGeo, options);
}, function (err) {
    if (err) {
    }
    else {
        console.log("ok");
    }
});

//# sourceMappingURL=data:application/json;base64,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QUFDLEVBQUUsVUFBVSxHQUFHO0lBQ1osRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUVWLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDckIsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFBIiwiZmlsZSI6ImFkZENvb3Jkcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBJQ29tdW5lIHtcbiAgICBub21lOiBzdHJpbmc7XG4gICAgY29kaWNlOiBudW1iZXI7XG4gICAgbGF0aXR1ZGU6IG51bWJlcjtcbiAgICBsb25naXR1ZGU6IG51bWJlcjtcbiAgICB6b25hOiB7XG4gICAgICAgIG5vbWU6IHN0cmluZztcbiAgICAgICAgY29kaWNlOiBudW1iZXI7XG4gICAgfSxcbiAgICByZWdpb25lOiB7XG4gICAgICAgIGNvZGljZTogbnVtYmVyO1xuICAgICAgICBub21lOiBzdHJpbmc7XG4gICAgfSxcbiAgICBjbToge1xuICAgICAgICBjb2RpY2U6IHN0cmluZztcbiAgICAgICAgbm9tZTogc3RyaW5nO1xuICAgIH0sXG4gICAgcHJvdmluY2lhOiB7XG4gICAgICAgIGNvZGljZTogbnVtYmVyO1xuICAgICAgICBub21lOiBzdHJpbmc7XG4gICAgfSxcbiAgICBzaWdsYTogc3RyaW5nO1xuICAgIGNvZGljZUNhdGFzdGFsZTogc3RyaW5nO1xuICAgIGNhcDogbnVtYmVyO1xufVxuXG5cblxubGV0IENvbXVuaTogSUNvbXVuZVtdID0gcmVxdWlyZShcIi4vY29tdW5pLmpzb25cIik7XG5cbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0ICogYXMgYXN5bmMgZnJvbSBcImFzeW5jXCI7XG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwiZnNcIjtcblxubGV0IGdlb2NvZGVyID0gcmVxdWlyZShcInNlYXJjaC1nb29nbGUtZ2VvY29kZVwiKTtcbi8vIHlvdSBjYW4gdXNlIEdvb2dsZSBvcHRpb25zIHRvIG1hbmFnZSByZXN1bHQgZm9ybWF0IFxudmFyIG9wdGlvbnMgPSB7XG4gICAgbGFuZ3VhZ2U6ICdpdCdcbn07XG5jb25zdCBhbGwgPSBDb211bmk7XG5jb25zdCB0ZXN0cyA9IFthbGxbMF0sIGFsbFszXSwgYWxsWzRdXVxuXG4vLyB1c2UgY2FsbGJhY2sgdG8gcmV0dXJuIHJlc3VsdCBmcm9tIGdlb2NvZGluZyBwcm9jZXNzXG5cbmNvbnN0IHVzZSA9IFtdO1xuXG5fLm1hcChhbGwsIGZ1bmN0aW9uIChpKSB7XG4gICAgaWYgKCFpLmxhdGl0dWRlKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ3RvZG8gJytjLm5vbWUpO1xuICAgICAgICB1c2UucHVzaChpKTtcblxuICAgIH0gZWxzZSB7XG4gICAgIC8vICAgY29uc29sZS5sb2coXCJleGlzdHMgXCIgKyBpLm5vbWUpXG5cblxuXG4gICAgfVxufSlcblxuLy8gYWRkcmVzcyBnZW9jb2Rpbmdcbi8vIHJldmVyc2UgZ2VvY29kaW5nXG5hc3luYy5lYWNoU2VyaWVzKHVzZSwgZnVuY3Rpb24gKGl0ZXJhdGUsIGNiKSB7XG5cblxuICAgIGZ1bmN0aW9uIGNhbGxiYWNrR2VvKGVycm9yLCByZXN1bHQpIHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgIGNiKClcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQubGVuZ3RoICYmIHJlc3VsdFswXSkge1xuICAgICAgICAgICAgICAgIF8ubWFwKE9iamVjdC5rZXlzKHJlc3VsdFswXSksIGZ1bmN0aW9uIChrKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZXJhdGVba10gPSByZXN1bHRbMF1ba11cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGZzLndyaXRlRmlsZShcIi4vY29tdW5pLmpzb25cIiwgSlNPTi5zdHJpbmdpZnkodXNlKSwgeyBlbmNvZGluZzogXCJ1dGYtOFwiIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYigpXG5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib2sgXCIgKyBpdGVyYXRlLm5vbWUgKyBcIiBcIiArIGl0ZXJhdGUuc2lnbGEpXG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiV0FSTiBcIiArIGl0ZXJhdGUubm9tZSArIFwiIFwiICsgaXRlcmF0ZS5zaWdsYSlcbiAgICAgICAgICAgICAgICBjYigpXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTsgLy8gb24gc3VjY2Vzc1xuICAgIH1cblxuXG5cbiAgICAvL2NvbnNvbGUubG9nKCd0b2RvICcrYy5ub21lKTtcbiAgICBnZW9jb2Rlci5nZW9jb2RlKGl0ZXJhdGUubm9tZSwgY2FsbGJhY2tHZW8sIG9wdGlvbnMpO1xuXG5cblxuXG59LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgaWYgKGVycikge1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJva1wiKVxuICAgIH1cbn0pXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

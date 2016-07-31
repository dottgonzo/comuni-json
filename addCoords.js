"use strict";
var Comuni = require("./comuni.1.json");
var _ = require("lodash");
var async = require("async");
var fs = require("fs");
var geocoder = require("search-google-geocode");
var options = {
    language: 'it'
};
var all = Comuni;
var test = [all[0], all[3], all[4]];
var use = all;
async.eachSeries(use, function (iterate, cb) {
    function callbackGeo(error, result) {
        if (error) {
            console.log(error);
        }
        else {
            if (result && result.length && result[0]) {
                _.map(Object.keys(result[0]), function (k) {
                    iterate[k] = result[0][k];
                });
            }
            else {
                console.warn(iterate.nome);
            }
        }
        ;
        cb();
    }
    if (!iterate.latitude) {
        geocoder.geocode(iterate.nome, callbackGeo, options);
    }
    else {
        cb();
    }
}, function (err) {
    if (err) {
    }
    else {
        fs.writeFileSync("./comuni.json", JSON.stringify(use), { encoding: "utf-8" });
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZENvb3Jkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBNEJBLElBQUksTUFBTSxHQUFZLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBRWpELElBQVksQ0FBQyxXQUFNLFFBQVEsQ0FBQyxDQUFBO0FBQzVCLElBQVksS0FBSyxXQUFNLE9BQU8sQ0FBQyxDQUFBO0FBQy9CLElBQVksRUFBRSxXQUFNLElBQUksQ0FBQyxDQUFBO0FBRXpCLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBRWhELElBQUksT0FBTyxHQUFHO0lBQ1YsUUFBUSxFQUFFLElBQUk7Q0FDakIsQ0FBQztBQUNGLElBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQztBQUNuQixJQUFNLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFJckMsSUFBTSxHQUFHLEdBQUMsR0FBRyxDQUFDO0FBSWQsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsVUFBVSxPQUFPLEVBQUUsRUFBRTtJQUd2QyxxQkFBcUIsS0FBSyxFQUFFLE1BQU07UUFDOUIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDdEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osRUFBRSxDQUFDLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQztvQkFDckMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDN0IsQ0FBQyxDQUFDLENBQUE7WUFDTixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDOUIsQ0FBQztRQUNMLENBQUM7UUFBQSxDQUFDO1FBQ0YsRUFBRSxFQUFFLENBQUE7SUFDUixDQUFDO0lBR0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUVwQixRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRXpELENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNKLEVBQUUsRUFBRSxDQUFBO0lBRVIsQ0FBQztBQUdMLENBQUMsRUFBRSxVQUFVLEdBQUc7SUFDWixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRVYsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBRUosRUFBRSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFBO0lBQ2pGLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQSIsImZpbGUiOiJhZGRDb29yZHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgSUNvbXVuZSB7XG4gICAgbm9tZTogc3RyaW5nO1xuICAgIGNvZGljZTogbnVtYmVyO1xuICAgIGxhdGl0dWRlOiBudW1iZXI7XG4gICAgbG9uZ2l0dWRlOiBudW1iZXI7XG4gICAgem9uYToge1xuICAgICAgICBub21lOiBzdHJpbmc7XG4gICAgICAgIGNvZGljZTogbnVtYmVyO1xuICAgIH0sXG4gICAgcmVnaW9uZToge1xuICAgICAgICBjb2RpY2U6IG51bWJlcjtcbiAgICAgICAgbm9tZTogc3RyaW5nO1xuICAgIH0sXG4gICAgY206IHtcbiAgICAgICAgY29kaWNlOiBzdHJpbmc7XG4gICAgICAgIG5vbWU6IHN0cmluZztcbiAgICB9LFxuICAgIHByb3ZpbmNpYToge1xuICAgICAgICBjb2RpY2U6IG51bWJlcjtcbiAgICAgICAgbm9tZTogc3RyaW5nO1xuICAgIH0sXG4gICAgc2lnbGE6IHN0cmluZztcbiAgICBjb2RpY2VDYXRhc3RhbGU6IHN0cmluZztcbiAgICBjYXA6IG51bWJlcjtcbn1cblxuXG5cbmxldCBDb211bmk6SUNvbXVuZVtdPSByZXF1aXJlKFwiLi9jb211bmkuMS5qc29uXCIpO1xuXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCAqIGFzIGFzeW5jIGZyb20gXCJhc3luY1wiO1xuaW1wb3J0ICogYXMgZnMgZnJvbSBcImZzXCI7XG5cbmxldCBnZW9jb2RlciA9IHJlcXVpcmUoXCJzZWFyY2gtZ29vZ2xlLWdlb2NvZGVcIik7XG4vLyB5b3UgY2FuIHVzZSBHb29nbGUgb3B0aW9ucyB0byBtYW5hZ2UgcmVzdWx0IGZvcm1hdCBcbnZhciBvcHRpb25zID0ge1xuICAgIGxhbmd1YWdlOiAnaXQnXG59O1xuY29uc3QgYWxsID0gQ29tdW5pO1xuY29uc3QgdGVzdCA9IFthbGxbMF0sIGFsbFszXSwgYWxsWzRdXVxuXG4vLyB1c2UgY2FsbGJhY2sgdG8gcmV0dXJuIHJlc3VsdCBmcm9tIGdlb2NvZGluZyBwcm9jZXNzXG5cbmNvbnN0IHVzZT1hbGw7XG5cbi8vIGFkZHJlc3MgZ2VvY29kaW5nXG4vLyByZXZlcnNlIGdlb2NvZGluZ1xuYXN5bmMuZWFjaFNlcmllcyh1c2UsIGZ1bmN0aW9uIChpdGVyYXRlLCBjYikge1xuXG5cbiAgICBmdW5jdGlvbiBjYWxsYmFja0dlbyhlcnJvciwgcmVzdWx0KSB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5sZW5ndGggJiYgcmVzdWx0WzBdKSB7XG4gICAgICAgICAgICAgICAgXy5tYXAoT2JqZWN0LmtleXMocmVzdWx0WzBdKSwgZnVuY3Rpb24gKGspIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlcmF0ZVtrXSA9IHJlc3VsdFswXVtrXVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihpdGVyYXRlLm5vbWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH07IC8vIG9uIHN1Y2Nlc3NcbiAgICAgICAgY2IoKVxuICAgIH1cblxuXG4gICAgaWYgKCFpdGVyYXRlLmxhdGl0dWRlKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ3RvZG8gJytjLm5vbWUpO1xuICAgICAgICBnZW9jb2Rlci5nZW9jb2RlKGl0ZXJhdGUubm9tZSwgY2FsbGJhY2tHZW8sIG9wdGlvbnMpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2IoKVxuXG4gICAgfVxuXG5cbn0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICBpZiAoZXJyKSB7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMoXCIuL2NvbXVuaS5qc29uXCIsIEpTT04uc3RyaW5naWZ5KHVzZSksIHsgZW5jb2Rpbmc6IFwidXRmLThcIiB9KVxuICAgIH1cbn0pXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

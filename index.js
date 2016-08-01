"use strict";
var _ = require("lodash");
var geo = require("geolib");
var world = require("./world.json");
var Localize = (function () {
    function Localize() {
    }
    Localize.prototype.getPosition = function (o) {
        if (!(o && o.latitude && o.longitude))
            throw Error("Error");
        var _this = this;
        if (o.state) {
            var State = _this.getState(o.state);
            console.log(o);
        }
        else {
            console.log('todo');
            throw Error("todo");
        }
    };
    Localize.prototype.getLocation = function (o) {
        return true;
    };
    Localize.prototype.getinfo = function (o) {
        return true;
    };
    Localize.prototype.getState = function (state, o) {
        var exists = false;
        var answer;
        _.map(world, function (continent) {
            _.map(continent.subcontinents, function (subcontinent) {
                _.map(subcontinent.countries, function (country) {
                    _.map(country.states, function (s) {
                        console.log(s.name);
                        if (s.name === state) {
                            exists = true;
                            answer = s;
                        }
                    });
                    if (!exists) {
                        answer = false;
                    }
                });
            });
        });
        return answer;
    };
    Localize.prototype.getCity = function (state, o) {
        return true;
    };
    return Localize;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Localize;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFZLENBQUMsV0FBTSxRQUFRLENBQUMsQ0FBQTtBQUU1QixJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFvRjVCLElBQUksS0FBSyxHQUFnQixPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFFakQ7SUFBQTtJQThFQSxDQUFDO0lBNUVHLDhCQUFXLEdBQVgsVUFBWSxDQUEwRDtRQUVsRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQUMsTUFBTSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFNUQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBRWpCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1YsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUE7WUFFbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUduQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBR3hCLENBQUM7SUFJTCxDQUFDO0lBR0QsOEJBQVcsR0FBWCxVQUFZLENBQW1DO1FBQzNDLE1BQU0sQ0FBQyxJQUFJLENBQUE7SUFFZixDQUFDO0lBRUQsMEJBQU8sR0FBUCxVQUFRLENBQW1DO1FBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUE7SUFDZixDQUFDO0lBRUQsMkJBQVEsR0FBUixVQUFTLEtBQWEsRUFBRSxDQUEwQjtRQUc5QyxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFFbkIsSUFBSSxNQUFNLENBQUM7UUFFWCxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxVQUFVLFNBQVM7WUFFNUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLFVBQVUsWUFBWTtnQkFFakQsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLFVBQVUsT0FBTztvQkFFM0MsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQzt3QkFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUE7d0JBQ25CLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQzs0QkFDbkIsTUFBTSxHQUFHLElBQUksQ0FBQzs0QkFDZCxNQUFNLEdBQUcsQ0FBQyxDQUFBO3dCQUNkLENBQUM7b0JBR0wsQ0FBQyxDQUFDLENBQUE7b0JBRUYsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUNWLE1BQU0sR0FBRyxLQUFLLENBQUE7b0JBRWxCLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUE7WUFFTixDQUFDLENBQUMsQ0FBQTtRQUVOLENBQUMsQ0FBQyxDQUFBO1FBR0YsTUFBTSxDQUFDLE1BQU0sQ0FBQTtJQUVqQixDQUFDO0lBRUQsMEJBQU8sR0FBUCxVQUFRLEtBQUssRUFBRSxDQUF5QjtRQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFBO0lBRWYsQ0FBQztJQUVMLGVBQUM7QUFBRCxDQTlFQSxBQThFQyxJQUFBO0FBOUVEOzBCQThFQyxDQUFBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XG5cbmxldCBnZW8gPSByZXF1aXJlKFwiZ2VvbGliXCIpO1xuXG5pbnRlcmZhY2UgSUJvdW5kYXJ5IHtcblxuICAgIGxhdGl0dWRlOiBudW1iZXI7XG4gICAgbG9uZ2l0dWRlOiBudW1iZXI7XG5cbn1cblxuaW50ZXJmYWNlIElHZW9jb2RlcyB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHByb3ZpbmNlczogSUdlb1tdO1xuICAgIGNpdGllczogSUNpdHlbXVxufVxuXG5cblxuaW50ZXJmYWNlIElDaXR5IHtcbiAgICBuYXRpdmVOYW1lOiBzdHJpbmc7XG4gICAgbGF0aXR1ZGU6IG51bWJlcjtcbiAgICBsb25naXR1ZGU6IG51bWJlcjtcbiAgICB6aXBjb2RlOiBudW1iZXI7XG4gICAgY2l0eUNvZGU6IHN0cmluZztcbiAgICBzdGF0ZTogc3RyaW5nO1xuICAgIGNvdW50cnk6IHN0cmluZztcbiAgICBpc29MYW5nOiBzdHJpbmc7XG4gICAgdHo6IHN0cmluZztcbiAgICBjdXJyZW5jeTogc3RyaW5nO1xuICAgIGN1cnJlbmN5U3ltYm9sOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBJR2VvIHtcbiAgICBuYXRpdmVOYW1lOiBzdHJpbmc7XG4gICAgemlwY29kZTogc3RyaW5nO1xuICAgIGNpdGllczogSUNpdHlbXTtcbiAgICBtYWluOiBJQ2l0eTtcbiAgICBsYXRpdHVkZTogbnVtYmVyO1xuICAgIGxvbmdpdHVkZTogbnVtYmVyO1xuXG59XG5cblxuaW50ZXJmYWNlIElzdGF0ZSB7XG4gICAgcmVnaW9uczogSUdlb2NvZGVzW107XG4gICAgYm91bmRhcmllczogSUJvdW5kYXJ5W107XG4gICAgY2FwaXRhbDogSUNpdHk7XG4gICAgbmF0aXZlTmFtZTogc3RyaW5nO1xuICAgIGxhdGxuZzogbnVtYmVyW107XG4gICAgaXNvTGFuZzogc3RyaW5nW107XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHR6OiBzdHJpbmc7XG5cbn1cblxuaW50ZXJmYWNlIElDb3VudHJ5IHtcbiAgICBzdGF0ZXM6IElzdGF0ZVtdO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBib3VuZGFyaWVzOiBJQm91bmRhcnlbXTtcbiAgICBuYXRpdmVOYW1lOiBzdHJpbmc7XG4gICAgY2FwaXRhbDogSUNpdHk7XG4gICAgY3VycmVuY2llczogc3RyaW5nW107XG4gICAgaXNvTGFuZzogc3RyaW5nW107XG4gICAgbGF0bG5nOiBudW1iZXJbXTtcbiAgICB0ejogc3RyaW5nO1xuXG59XG5cbmludGVyZmFjZSBJU3ViY29udGluZW50IHtcblxuICAgIG5hbWU6IHN0cmluZztcbiAgICBjb3VudHJpZXM6IElDb3VudHJ5W107XG4gICAgYm91bmRhcmllczogSUJvdW5kYXJ5W107XG59XG5cbmludGVyZmFjZSBJR2VvYnVpbGQge1xuXG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHN1YmNvbnRpbmVudHM6IElTdWJjb250aW5lbnRbXTtcbiAgICBib3VuZGFyaWVzOiBJQm91bmRhcnlbXTtcblxufVxuXG5cblxubGV0IHdvcmxkOiBJR2VvYnVpbGRbXSA9IHJlcXVpcmUoXCIuL3dvcmxkLmpzb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2FsaXplIHtcblxuICAgIGdldFBvc2l0aW9uKG86IHsgbGF0aXR1ZGU6IG51bWJlciwgbG9uZ2l0dWRlOiBudW1iZXIsIHN0YXRlPzogc3RyaW5nIH0pIHtcblxuICAgICAgICBpZiAoIShvICYmIG8ubGF0aXR1ZGUgJiYgby5sb25naXR1ZGUpKSB0aHJvdyBFcnJvcihcIkVycm9yXCIpO1xuXG4gICAgICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG8uc3RhdGUpIHtcbiAgICAgICAgICAgIGxldCBTdGF0ZSA9IF90aGlzLmdldFN0YXRlKG8uc3RhdGUpXG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG8pO1xuXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b2RvJyk7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcInRvZG9cIik7XG5cblxuICAgICAgICB9XG5cblxuXG4gICAgfVxuXG5cbiAgICBnZXRMb2NhdGlvbihvOiB7IGNpdHk6IHN0cmluZywgc3RhdGU/OiBzdHJpbmcgfSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuXG4gICAgfVxuXG4gICAgZ2V0aW5mbyhvOiB7IGNpdHk6IHN0cmluZywgc3RhdGU/OiBzdHJpbmcgfSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGdldFN0YXRlKHN0YXRlOiBzdHJpbmcsIG8/OiB7IGNvbnRpbmVudD86IHN0cmluZyB9KTogSXN0YXRlIHwgYm9vbGVhbiB7XG5cblxuICAgICAgICBsZXQgZXhpc3RzID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IGFuc3dlcjtcblxuICAgICAgICBfLm1hcCh3b3JsZCwgZnVuY3Rpb24gKGNvbnRpbmVudCkge1xuXG4gICAgICAgICAgICBfLm1hcChjb250aW5lbnQuc3ViY29udGluZW50cywgZnVuY3Rpb24gKHN1YmNvbnRpbmVudCkge1xuXG4gICAgICAgICAgICAgICAgXy5tYXAoc3ViY29udGluZW50LmNvdW50cmllcywgZnVuY3Rpb24gKGNvdW50cnkpIHtcblxuICAgICAgICAgICAgICAgICAgICBfLm1hcChjb3VudHJ5LnN0YXRlcywgZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHMubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLm5hbWUgPT09IHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXIgPSBzXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICghZXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXIgPSBmYWxzZVxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIH0pXG5cblxuICAgICAgICByZXR1cm4gYW5zd2VyXG5cbiAgICB9XG5cbiAgICBnZXRDaXR5KHN0YXRlLCBvOiB7IGNvbnRpbmVudD86IHN0cmluZyB9KSB7XG4gICAgICAgIHJldHVybiB0cnVlXG5cbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

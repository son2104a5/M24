"use strict";
var weekDays;
(function (weekDays) {
    weekDays[weekDays["sunDay"] = 0] = "sunDay";
    weekDays[weekDays["moDay"] = 1] = "moDay";
    weekDays[weekDays["tuesDay"] = 2] = "tuesDay";
    weekDays[weekDays["weDay"] = 3] = "weDay";
    weekDays[weekDays["thDay"] = 4] = "thDay";
    weekDays[weekDays["frDay"] = 5] = "frDay";
    weekDays[weekDays["satDay"] = 6] = "satDay";
})(weekDays || (weekDays = {}));
for (let i = 0; i < 7; i++) {
    console.log(weekDays[i]);
}

"use strict";
var weekDay;
(function (weekDay) {
    weekDay[weekDay["monDay"] = 0] = "monDay";
    weekDay[weekDay["tuesDay"] = 1] = "tuesDay";
    weekDay[weekDay["wednesDay"] = 2] = "wednesDay";
    weekDay[weekDay["thusDay"] = 3] = "thusDay";
    weekDay[weekDay["friDay"] = 4] = "friDay";
    weekDay[weekDay["saturDay"] = 5] = "saturDay";
})(weekDay || (weekDay = {}));
for (let i = 0; i < 7; i++) {
    console.log(weekDay[i]);
}

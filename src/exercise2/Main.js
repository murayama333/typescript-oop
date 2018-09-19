"use strict";
exports.__esModule = true;
var Counter_1 = require("./Counter");
var counter1 = Counter_1.Counter.getInstance();
var counter2 = Counter_1.Counter.getInstance();
counter1.setMax(5);
counter1.countUp();
counter2.countUp();
console.log(counter1 == counter2);

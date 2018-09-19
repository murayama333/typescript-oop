"use strict";
exports.__esModule = true;
var Car_1 = require("./Car");
var car1 = new Car_1.Car("Kbox", 3);
var car2 = new Car_1.Car("Kwagon", 5);
for (var i = 0; i < 5; i++) {
    car1.move();
    car2.move();
}

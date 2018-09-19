"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car(name, gas) {
        this.name = name;
        this.gas = gas;
    }
    Car.prototype.move = function () {
        if (this.gas > 0) {
            this.gas--;
            console.log(this.name + ":move");
        }
        else {
            console.log(this.name + ":stop");
        }
    };
    return Car;
}());
exports.Car = Car;

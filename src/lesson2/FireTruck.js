"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Car_1 = require("../lesson1/Car");
var FireTruck = /** @class */ (function (_super) {
    __extends(FireTruck, _super);
    function FireTruck(name, gas, water) {
        var _this = _super.call(this, name, gas) || this;
        _this.water = water;
        return _this;
    }
    FireTruck.prototype.spray = function () {
        var water = "";
        for (var i = 0; i < this.water; i++) {
            water += "=";
        }
        console.log(this.name + ":spray:" + water);
        this.water = 0;
    };
    return FireTruck;
}(Car_1.Car));
exports.FireTruck = FireTruck;

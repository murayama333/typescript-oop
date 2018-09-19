"use strict";
exports.__esModule = true;
var Ship_1 = require("./Ship");
var Conteiner_1 = require("./Conteiner");
var LoadableFireTruck_1 = require("./LoadableFireTruck");
var ship = new Ship_1.Ship();
var container1 = new Conteiner_1.Container("container1");
var container2 = new Conteiner_1.Container("container2");
var fireTruck = new LoadableFireTruck_1.LoadableFireTruck("kfire", 5, 10);
ship.push(container1);
ship.push(container2);
ship.push(fireTruck);
var loadable = ship.pop();
while (loadable != null) {
    loadable.info();
    loadable = ship.pop();
}

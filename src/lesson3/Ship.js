"use strict";
exports.__esModule = true;
var Ship = /** @class */ (function () {
    function Ship() {
        this.loadables = [];
    }
    Ship.prototype.push = function (loadable) {
        this.loadables.push(loadable);
    };
    Ship.prototype.pop = function () {
        return this.loadables.pop();
    };
    return Ship;
}());
exports.Ship = Ship;

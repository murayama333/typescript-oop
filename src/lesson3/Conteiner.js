"use strict";
exports.__esModule = true;
var Container = /** @class */ (function () {
    function Container(name) {
        this.name = name;
    }
    Container.prototype.info = function () {
        console.log(this.name);
    };
    return Container;
}());
exports.Container = Container;

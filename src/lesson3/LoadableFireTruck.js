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
var FireTruck_1 = require("../lesson2/FireTruck");
var LoadableFireTruck = /** @class */ (function (_super) {
    __extends(LoadableFireTruck, _super);
    function LoadableFireTruck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoadableFireTruck.prototype.info = function () {
        console.log(this.name);
    };
    return LoadableFireTruck;
}(FireTruck_1.FireTruck));
exports.LoadableFireTruck = LoadableFireTruck;

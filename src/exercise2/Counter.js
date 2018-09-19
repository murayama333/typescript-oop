"use strict";
exports.__esModule = true;
var Counter = /** @class */ (function () {
    function Counter() {
    }
    Counter.getInstance = function () {
        return Counter.counter;
    };
    Counter.prototype.countUp = function () {
        for (var i = 1; i <= this.max; i++) {
            console.log(i);
        }
    };
    Counter.prototype.setMax = function (max) {
        this.max = max;
    };
    Counter.counter = new Counter();
    return Counter;
}());
exports.Counter = Counter;

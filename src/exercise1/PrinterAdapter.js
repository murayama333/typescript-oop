"use strict";
exports.__esModule = true;
var PrinterAdapter = /** @class */ (function () {
    function PrinterAdapter(legacyPrinter) {
        this.legacyPrinter = legacyPrinter;
    }
    PrinterAdapter.prototype.print = function (message) {
        this.legacyPrinter.doPrint(message);
    };
    return PrinterAdapter;
}());
exports.PrinterAdapter = PrinterAdapter;

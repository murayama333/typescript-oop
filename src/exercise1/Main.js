"use strict";
exports.__esModule = true;
var PrinterAdapter_1 = require("./PrinterAdapter");
var LegacyPrinter_1 = require("./LegacyPrinter");
var printer = new PrinterAdapter_1.PrinterAdapter(new LegacyPrinter_1.LegacyPrinter());
printer.print("Hello World");

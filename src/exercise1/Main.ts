import { Printable } from "./Printable";
import { PrinterAdapter } from "./PrinterAdapter";
import { LegacyPrinter } from "./LegacyPrinter";

const printer: Printable = new PrinterAdapter(new LegacyPrinter());
printer.print("Hello World");

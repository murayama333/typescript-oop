import { Printer } from "./Printer";
import { LegacyPrinter } from "./LegacyPrinter";

export class PrinterAdapter implements Printer {
    legacyPrinter: LegacyPrinter;

    constructor(legacyPrinter: LegacyPrinter) {
        this.legacyPrinter = legacyPrinter;
    }

    print(message: string) {
        this.legacyPrinter.doPrint(message);
    }
}
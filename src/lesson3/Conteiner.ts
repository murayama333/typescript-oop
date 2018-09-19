import { Loadable } from "./Loadable";

export class Container implements Loadable {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }

    info() {
        console.log(this.name);
    }
}
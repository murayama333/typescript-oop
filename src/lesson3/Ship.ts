import {Loadable} from './Loadable';

export class Ship {
    loadables: Loadable[] = [];

    push(loadable: Loadable){
        this.loadables.push(loadable);
    }

    pop(): Loadable{
        return this.loadables.pop();
    }
}
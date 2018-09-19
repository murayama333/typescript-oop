import { FireTruck } from '../lesson2/FireTruck';
import { Loadable } from './Loadable';

export class LoadableFireTruck extends FireTruck implements Loadable {
    info() {
        console.log(this.name);
    }
}
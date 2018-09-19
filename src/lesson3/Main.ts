import { Ship } from "./Ship";
import { Container } from "./Conteiner";
import { LoadableFireTruck } from "./LoadableFireTruck";
import { Loadable } from "./Loadable";

const ship: Ship = new Ship();
const container1: Container = new Container("container1");
const container2: Container = new Container("container2");
const fireTruck: LoadableFireTruck = new LoadableFireTruck("kfire", 5, 10);

ship.push(container1);
ship.push(container2);
ship.push(fireTruck);

let loadable: Loadable = ship.pop();
while(loadable != null) {
    loadable.info();
    loadable = ship.pop();
}

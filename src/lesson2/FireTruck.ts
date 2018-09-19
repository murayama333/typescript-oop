import { Car } from '../lesson1/Car';

export class FireTruck extends Car {
    water: number;

    constructor(name: string, gas: number, water: number) {
        super(name, gas);
        this.water = water;
    }

    spray() {
        let water = "";
        for (let i = 0; i < this.water; i++) {
            water += "=";
        }
        console.log(this.name + ":spray:" + water);
        this.water = 0;
    }
}

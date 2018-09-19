class Car {
    name: string;
    gas: number;
    
    constructor(name: string, gas: number) {
        this.name = name;
        this.gas = gas;
    }
    
    move() {
        if (this.gas > 0) {
            this.gas--;
            console.log(this.name + ":move");
        } else {
            console.log(this.name + ":stop");
        }
    }
}

export { Car };

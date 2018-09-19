import {Car} from './Car';

const car1: Car = new Car("Kbox", 3);
const car2: Car = new Car("Kwagon", 5);

for (let i = 0; i < 5; i++) {
    car1.move();
    car2.move();
}

import {Counter} from './Counter';

const counter1: Counter  = Counter.getInstance();
const counter2: Counter = Counter.getInstance();

counter1.setMax(5);
counter1.countUp();
counter2.countUp();

console.log(counter1 == counter2);

import {findLastCar} from '../project-root/problem2.js';
import inventory from '../inventory.js';

const lastCar = findLastCar(inventory);
console.log(`Last car is a ${lastCar.car_make} ${lastCar.car_model}`);

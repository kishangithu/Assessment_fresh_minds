import { findCarById } from '../project-root/problem1.js';
import inventory from '../inventory.js';

const carId = 33;

const car = findCarById(inventory, carId);
if (car) {
    console.log(`Car ${carId} is a ${car.car_year} ${car.car_make} ${car.car_model}`);
} else {
    console.log(`Car with ID ${carId} not found`);
}

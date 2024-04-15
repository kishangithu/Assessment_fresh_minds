import {countCarsOlderThan2000} from '../project-root/problem5.js';
import inventory from '../inventory.js';
var year;
const olderCarsCount = countCarsOlderThan2000(inventory,year);
console.log(`Number of cars older than 2000: ${olderCarsCount}`);

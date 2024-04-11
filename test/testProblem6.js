import {filterBMWAndAudi} from '../project-root/problem6.js';
import inventory from '../inventory.js';

const BMWAndAudiCars = filterBMWAndAudi(inventory);
console.log(JSON.stringify(BMWAndAudiCars, null, 2));

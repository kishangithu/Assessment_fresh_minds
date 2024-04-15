
  export function filterBMWAndAudi(inventory) {
    return inventory.filter(car => ['BMW', 'Audi'].includes(car.car_make));
}




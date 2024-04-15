
 export function countCarsOlderThan2000(inventory, year = 2000) {
    let olderCarsCount = 0;
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].car_year < year) {
            olderCarsCount++;
        }
    }
    return olderCarsCount;
}


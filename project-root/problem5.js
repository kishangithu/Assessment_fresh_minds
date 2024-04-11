 export function countCarsOlderThan2000(inventory) {
    let olderCarsCount = 0;
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].car_year < 2000) {
            olderCarsCount++;
        }
    }
    return olderCarsCount;
}


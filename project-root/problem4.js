export function getAllCarYears(inventory) {
    const carYears = [];
    for (let i = 0; i < inventory.length; i++) {
        carYears.push(inventory[i].car_year);
    }
    return carYears;
}

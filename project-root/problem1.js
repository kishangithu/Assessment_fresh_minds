export function findCarById(inventory, id) {
    for (let car of inventory) {
        if (car.id === id) {
            return car;
        }
    }
    return null;
}

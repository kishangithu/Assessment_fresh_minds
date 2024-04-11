export function sortCarModelsAlphabetically(inventory) {
    const carModels = [];
    for (let i = 0; i < inventory.length; i++) {
        carModels.push(inventory[i].car_model);
    }
    const sortedModels = carModels.sort();
    return sortedModels;
}


import { v4 as uuidv4 } from "uuid";

function addItem(name, amt) {
    theItems.push({ id: uuidv4(), name: name, amt: amt });
}

export const theItems = [];

export default addItem;

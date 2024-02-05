import { v4 as uuidv4 } from "uuid";

function addItem(id, name, amt) {
    theItems.push({ id: id, name: name, amt: amt });
}

export const theItems = [
    {
        id: uuidv4(),
        name: "Wage",
        amt: 30000,
    },
    {
        id: uuidv4(),
        name: "Electrical Bill",
        amt: -514.38,
    },
];

export default addItem;

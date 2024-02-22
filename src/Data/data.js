import { v4 as uuidv4 } from "uuid";

function addItem(name, amt, date) {
    date = Date(Date.now()).split(" ", 5);
    date = Array.from(date);
    date = [date[4], date[2], date[1], date[3]];
    let a = "";
    date.forEach(element => {
        a = a.concat(element, " ");
    });

    theItems.push({ id: uuidv4(), name: name, amt: amt , date: a});
}

export const theItems = [];

export default addItem;

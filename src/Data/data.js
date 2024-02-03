import { v4 as uuidv4 } from 'uuid';

export const theItems =[{
    id: uuidv4(),
    name: "A snack",
    amt: 20,
},{
    id: uuidv4(),
    name: "Electrical Bill",
    amt: 514.38,
}
]

console.log(theItems);
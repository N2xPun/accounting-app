import Item from "./Item";
import "./CCSS/Items.css"
import { theItems } from "../Data/data";

function Items(){
    const listItems = theItems.map(item =>
        <li key={item.id}><Item {...item}/></li>)

    return(
        <div>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default Items;
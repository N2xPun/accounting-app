import Item from "./Item";
import "./CCSS/Items.css";
import { theItems } from "../Data/data";

function Items({
    lI = theItems.map((item) => (
        <li key={item.id}>
            <Item {...item} />
        </li>
    )),
}) {
    const listItems = lI;

    return (
        <div>
            <ul>{listItems}</ul>
        </div>
    );
}

export default Items;

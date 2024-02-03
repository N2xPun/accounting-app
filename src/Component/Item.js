import "./CCSS/Item.css";
import PropTypes from "prop-types";

Item.propTypes = {
    name: PropTypes.string.isRequired,
    amt: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired
}

function Item({id, name, amt}) {

    return(
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{"฿" + amt}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Item;
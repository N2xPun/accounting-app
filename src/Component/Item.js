import { useState } from "react";
import "./CCSS/Item.css";
import PropTypes from "prop-types";

Item.propTypes = {
    name: PropTypes.string.isRequired,
    amt: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
};

function Item({ id, name, amt }) {
    let colour = "green";
    if(amt==0){
        colour = "grey";
    }
    if(amt<0){
        colour = "red";
    }

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td style={{borderRight: `5px solid ${colour}`}}>{"฿" + amt}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Item;

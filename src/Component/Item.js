import "./CCSS/Item.css";
import PropTypes from "prop-types";

Item.propTypes = {
    name: PropTypes.string.isRequired,
    amt: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

function Item({ id, name: title, amt: body, date}) {

    return (
        <div className="part">
            <span style={{fontWeight: "bold", fontSize: "36px"}}>{title}</span> <span>{date}</span> <br/>
            <text style={{wordWrap: "break-word", width: "100%"}}>{body}</text>
        </div>
    );
}

export default Item;

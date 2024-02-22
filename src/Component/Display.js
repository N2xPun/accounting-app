import "./CCSS/Display.css";
import "./CCSS/Uni.css";
import Items from "./Items";

function Display() {
    return (
        <div className="box">
            <h1>Blogger</h1>
            <p className="alignText"> Free Blog.</p>
            <Items />
            <br/>
        </div>
    );
}

export default Display;

import "./CCSS/Display.css";
import "./CCSS/Uni.css";
import Items from "./Items";

function Display({incS, expS, Sum}) {
    return (
        <div className="box">
            <h1>Accounting App</h1>
            <p className="alignText"> Track Daily Transactions.</p>
            <Items />
            <br/>
            <p>Income Sum: ฿{incS}</p>
            <p>Expense Sum: ฿{expS}</p>
            <p>Remaining Sum: ฿{Sum}</p>
        </div>
    );
}

export default Display;

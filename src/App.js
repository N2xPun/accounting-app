import { useState } from "react";
import Display from "./Component/Display";
import Form from "./Component/Form";
import Item from "./Component/Item";
import data from "./Data/data";
import { theItems } from "./Data/data";

function App() {
    const [aname, setName] = useState("");
    const [aamt, setAmt] = useState("");
    const [tdata, setData] = useState([]);

    const HandleSubmit = (event) => {
        event.preventDefault();
        data(aname, aamt, Date.now);
        setData(
            theItems.map((item) => (
                <li key={item.id}>
                    <Item {...item} />
                </li>
            ))
        );
        console.log(tdata);
    };

    const setAName = (event) => {
        event.preventDefault();
        setName(event.target.value);
    };

    const setAAmt = (event) => {
        event.preventDefault();
        setAmt(event.target.value);
    };

    return (
        <div>
            <Display />
            <Form
                onSubmit={HandleSubmit}
                setAName={setAName}
                setAAmt={setAAmt}
            />
        </div>
    );
}

export default App;

import { useState } from "react";
import Display from "./Component/Display";
import Form from "./Component/Form";
import Item from "./Component/Item";
import data from "./Data/data";
import { v4 as uuidv4 } from "uuid";
import { theItems } from "./Data/data";

var sumpos = .0;
var sumneg = .0;
var sum = .0;

theItems.forEach(item => {
    if(item.amt > 0){
        sumpos += item.amt;
    }
    else{
        sumneg += item.amt;
    }
});

sum = sumpos + sumneg;

function App() {
    const [aname, setName] = useState("");
    const [aamt, setAmt] = useState(0);
    const [tdata, setData] = useState([]);

    const HandleSubmit = (event) => {
        event.preventDefault();
        data(uuidv4(), aname, parseFloat(aamt));
        setData(
            theItems.map((item) => (
                <li key={item.id}>
                    <Item {...item} />
                </li>
            ))
        );
        console.log(tdata);

        sumpos = 0;
        sumneg = 0;

        theItems.forEach(item => {
            if(item.amt > 0){
                sumpos += item.amt;
            }
            else{
                sumneg += item.amt;
            }
        });

        sum = sumpos + sumneg;
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
            <Display incS={sumpos} expS={sumneg} Sum={sum}/>
            <Form
                onSubmit={HandleSubmit}
                setAName={setAName}
                setAAmt={setAAmt}
            />
        </div>
    );
}

export default App;

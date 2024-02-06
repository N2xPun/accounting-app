import "./CCSS/Uni.css";
import "./CCSS/Form.css";
import { useState } from "react";

function Form({onSubmit, setAName, setAAmt}) {
    const [vname, setVName] = useState("");
    const [vamt, setVAmt] = useState(0);

    function SetBothNames(e){
        setAName(e);
        setVName(e.target.value);
    }

    function SetBothAmount(e){
        setAAmt(e);
        setVAmt(e.target.value);
    }

    return (
        <div className="box">
            <h2 className="alignText">Insert Transaction</h2>
            <form
                onSubmit={onSubmit}
                style={{ fontFamily: "serif", color: "white" }}
            >
                <label>Transaction Name</label> <br />
                <input
                    type="text"
                    className="textbox"
                    value={vname}
                    onChange={(e) => (SetBothNames(e))}
                ></input>{" "}
                <br style={{ marginBottom: "10px" }} />
                <label>Transaction Amount</label> <br />
                <input
                    type="number"
                    className="textbox"
                    value={vamt}
                    onChange={(e) => (SetBothAmount(e))}
                ></input>{" "}
                <br style={{ marginBottom: "10px" }} />
                <input
                    type="submit"
                    value={"Insert Transaction"}
                    className="ins"
                ></input>
            </form>
        </div>
    );
}

export default Form;
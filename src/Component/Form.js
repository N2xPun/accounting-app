import "./CCSS/Uni.css";
import "./CCSS/Form.css";
import { useState } from "react";

function Form({onSubmit, setAName, setAAmt}) {
    const [vname, setVName] = useState("");
    const [vamt, setVAmt] = useState("");

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
            <h2 className="alignText">Make Blog</h2>
            <form
                onSubmit={onSubmit}
                style={{ fontFamily: "serif", color: "white" }}
            >
                <label>Title</label> <br />
                <input
                    type="text"
                    className="textbox"
                    value={vname}
                    onChange={(e) => (SetBothNames(e))}
                ></input>{" "}
                <br style={{ marginBottom: "10px" }} />
                <label>Body</label> <br />
                <textarea
                    type="text"
                    value={vamt}
                    onChange={(e) => (SetBothAmount(e))}
                ></textarea>{" "}
                <br style={{ marginBottom: "10px" }} />
                <input
                    type="submit"
                    value={"Make Blog"}
                    className="ins"
                ></input>
            </form>
        </div>
    );
}

export default Form;
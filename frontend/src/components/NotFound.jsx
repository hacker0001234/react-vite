import React from "react";
import {useNavigate} from "react-router-dom";
import "../styles/NotFound.css"

function NotFound(){
    let navigate = useNavigate();
    const nofond = () =>{
        navigate("/");
    }

    return (
        <div className="not-found-container">
            <div className="notFound">
                <h1>NOT found</h1>
                <button onClick={nofond}>to home</button>
            </div>
        </div>
    );
}
export default NotFound;
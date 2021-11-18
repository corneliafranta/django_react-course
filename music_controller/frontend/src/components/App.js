import React from "react";
import { render } from "react-dom";
import Homepage from "./Homepage";


const App = () =>  {
    return (
        <div>
            <Homepage />
        </div>
    );

}

const appDiv = document.getElementById("root");
render(<App />, appDiv);
import React from "react";
import { render } from "react-dom";
import HomePage from "./Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./createRoomPage";


const App = () =>  {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/join" element={<RoomJoinPage />} />
                    <Route path="/create" element={<CreateRoomPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );

}

const appDiv = document.getElementById("root");
render(<App />, appDiv);
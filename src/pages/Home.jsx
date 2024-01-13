import React from "react";
import Sidebar from "../components/Sidebar"
import Main from "../components/Main";

const Home = () => {
    return (
        <div className='home'>
            <div className="container">
                <Sidebar/>
                <Main/>
            </div>
        </div>
    )
}

export default Home
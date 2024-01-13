import React from "react";
import Sidebar from "../components/Sidebar"
import Main from "../components/Main";

const Group = () => {
    return (
        <div className='group'>
            <div className="container">
                <Sidebar/>
                <Main/>
            </div>
        </div>
    )
}

export default Group
import React from "react";
import "./Searchbox.css"
const Searchbox= ({onInputChange})=>{
    return (
        <div className="search-container">
            <input onChange={(event)=>onInputChange(event.target.value)} 
            placeholder="Type Keywords"  className="search-input"/>
        </div>
    );
};
export default Searchbox;
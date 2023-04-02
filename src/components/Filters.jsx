import { useState } from "react";

const Filters = ()=>{

    const [filter, serFilter] = useState([]);

    const addFilters = (e)=>{

    }

    return(
        <>
            <div>
                <select name="username" >
                    {/* axios get author */}
                </select>
                <select name="title">
                    {/* buscar por query title */}
                </select>                
                <select name="tagName">
                    {/* buscar por query tag */}                   
                </select>
            </div>
        </>
    )

}

export default Filters;
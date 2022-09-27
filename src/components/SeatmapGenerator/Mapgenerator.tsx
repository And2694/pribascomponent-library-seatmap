import React from "react";
import Seats from "./Seats";

const Mapgenerator = (data: any) => {

    var i=0;

    return(
        <tr key={"items"+i++}>
            {data.data.map((item:any)=>(
                <Seats key={"KeyMap"+i++} id={item} iterator={i++}/>
            ))}
        </tr>
    )

}

export default Mapgenerator;
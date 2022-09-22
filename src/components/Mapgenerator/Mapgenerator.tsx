import React from "react";
import Seats from "./Seats";


interface elements{
        id: string;
}

interface propsMapgenerator{
    data: elements[]
}

const Mapgenerator = (data: propsMapgenerator): JSX.Element => {

    var i=0;

    return(
        <tr>
            {data.data.map((item)=>(
                <Seats id={item.id} />
            ))}
        </tr>
    )

}

export default Mapgenerator;
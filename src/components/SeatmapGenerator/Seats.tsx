import React from 'react';
import "./Seats.css";

const Seats = (props:any) => {
    var i =0;

    return (
        <td key={"keyItem"+i++}>
            <div className="seat" id={props.id}></div>
        </td>
    );
};

export default Seats;
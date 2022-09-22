import React from 'react';

interface propsSeats {
    id: string;
}

const Seats = (props:propsSeats) => {
    return (
        <td>
            <div className="seat" id={props.id}></div>
        </td>
    );
};

export default Seats;
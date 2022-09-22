import React from 'react';

interface propsSeats {
    id: string;
}

const Seats = (props:propsSeats): JSX.Element => {
    return (
        <td>
            <div className="seat" id={props.id}></div>
        </td>
    );
};

export default Seats;
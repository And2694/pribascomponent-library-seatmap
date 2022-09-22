import React from 'react';
import Mapgenerator from './Mapgenerator';

interface attributes{
        id: string;
        number:Number;
        isReserved:Boolean;
        orientation:string;
        internalId:string;
        externalId:string;
        edited: Boolean;
        row:Number;
        column:string;
        price:Number;
        currency:string;
        office:string;
        owner:string;
        seatFamily:string;
        externalStatus:string;
        manualPricing:Boolean;
        priced:Boolean;
        status:string;
        payment:string;
        sident: Boolean;
        chargeable: Boolean;
        attributes: string[];
        channel: string;
        hasChanged: Boolean;
        customerPaid: Boolean;
        hideOnConfirmation: Boolean;
        fees: string[];
        recordLocator: string;
        paxName: string;
        paxType: string;
        pax: string;
        changeable: Boolean;
        cancelable: Boolean;
        refundable: Boolean;
        separation: Boolean;
        iterator: number;
}

interface propsMain{
    data: attributes[]
}

const Main = (data: propsMain) => {
    return (
        <div>
            <table className="table" style={{marginLeft: "auto", marginRight: "auto", width: "8em"}}>
                {data.data.map((ele, idx)=>{
                    try{
                        if(ele.separation==true){
                            return <><Mapgenerator data={[ele]} /><th><br/></th></>
                        }
                    }catch(err){
                        
                    }
                    return <Mapgenerator data={[ele]} />
                })}
            </table>
        </div>
    );
};

export default Main;
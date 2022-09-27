import React from 'react';
import Mapgenerator from './Mapgenerator';
import "./Table.css";

const Main = (data: any) => {

    var i=0;

    return (
        <div key={"keyHeaddiv"+i++}>
            <table key={"keyTable"+i++} className="table" style={{marginLeft: "auto", marginRight: "auto", width: "8em"}}>
´                {data.data.map((items: any, idx: any)=>{
                    try{
                        if(items[idx].separation==true){
                            return <><Mapgenerator key={"KeySeatMap"+i++} data={items} /><th key={"separation"+i++}><br/></th></>
                        }
                    }catch(err){
                        
                    }
                    return <Mapgenerator key={"KeySeatMap"+i++}  data={items} />
                })}
            </table>
        </div>
    );
};

export default Main;
import React from "react";

function Counter(){
    var[c,setC]=React.useState(0)
    function inc(){
        // setC(c+1)
        setC((currentvalue)=>{
            return currentvalue+1
        })
    }
    function dec(){
        // setC(c-1)
        setC((currentvalue)=>{
            return currentvalue-1
    })
}
    return (
        <div className="border border-5 p-3 m-2 border-success">
            <h1>Counter:{c}</h1>
            <button  style={{marginRight:"2%"}} onClick={()=>inc()}>Increament</button>
            <button onClick={()=>dec()}>Decreament</button>
        </div>
    )

}

export default Counter;
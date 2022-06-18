import React, { useState } from "react";

function StatePrevValue(){
    const initialCount = 0 ;
    const [count,setCount] = useState(initialCount);
    // const fun = () =>{                // this gives error therefore use arrow fun to to change the state which depend on prev value
    //     for(let i=0;i<5;i++){
    //         setCount(count+1);
    //     }
    // };
    const fun =()=>{
        for(let i=0;i<5;i++){
            setCount((prevState)=>prevState+1);
        }
    }
    return(
        <div>
            Count:{count}
            <button onClick={()=>setCount(count+1)}>Increase</button>
            <button onClick={()=>setCount(count-1)}>Decrease</button>
            <button onClick={()=>setCount(initialCount)}>Resest</button>
            <button onClick={fun}>Increase 5</button>
        </div>
    )
};
export default StatePrevValue;
import React, { useState } from "react";

export default function DairyModify() {
    const [mode, setMode ] = useState(0)
    return(<>
    {mode == 0 ? <button onClick={()=> setMode(1)}> 수정 </button> 
              : <div><input type='text'/><button onClick={()=> setMode(0)}> 수정 </button></div>}
    </>)

}
import React from "react";

function Spread (){
    const NumOne = [1, 2, 3];
    const NumTwo = [4, 5, 6];
    const NumCombined = [...NumOne, ...NumTwo];
return(
    <div>
        <p>{NumCombined}</p>
    </div>
);
}
export default Spread;
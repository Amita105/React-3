import React from "react";
//Component is taking/accepting the children and destructuring and then rendering in return.
function Card({children}){
const cardStyle={
    width:'200px',
    height:'200px',
    border:'1.5px solid lightgrey',
    borderRadius:'2px',
    margin:'4px',
    padding:'4px'

}
return (
<div style={cardStyle}>
    {children}
</div>

)

}
export default Card;
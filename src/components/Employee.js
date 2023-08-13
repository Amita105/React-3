import React from "react"


Employee.defaultProps = {
    Ename: "Sandy",
    eyeColor: "deepblue",
    age: "20"    
}
function Employee(props) {
    return (
    <div>{props.Ename} employee, Eye Color: {props.eyeColor}, Age: {props.age}</div>
    )

}
export default Employee
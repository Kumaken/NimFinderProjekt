//Basic Dependency:
import React from "react";

class StudentInfoModel extends React.Component{
    //main render method:
    render(){
        return(
            <tr>
                <th>{this.props.name}</th>
                <th>{this.props.prodi}</th>
                <th>{this.props.nim_tpb}</th>
                <th>{this.props.nim_jur}</th>
            </tr>
        ) 
    }
}

//expose this .js file so it can be imported by other modules:
export default StudentInfoModel;
//Basic Dependency:
import React from "react";

class StudentInfoModel extends React.Component{
    //main render method:
    render(){
        return(
            <div>
                <br></br>
                <p>Name : {this.props.name}</p>
                <p>Prodi : {this.props.prodi}</p>
                <p>NIM_TPB : {this.props.nim_tpb}</p>
                <p>NIM_Jurusan : {this.props.nim_jur}</p>
                <br></br>
            </div>
            
        ) 
    }
}

//expose this .js file so it can be imported by other modules:
export default StudentInfoModel;
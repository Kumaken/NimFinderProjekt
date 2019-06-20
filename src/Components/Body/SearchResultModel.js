//Basic Dependency:
import React from "react";
//Components Dependency:
import StudentInfoModel from './StudentInfoModel.js';
//Bootstrap Dependencies:
import {
    Table,
  }  from 'react-bootstrap';

//class Components:
class SearchResultModel extends React.Component{
    constructor(){
        super();
        this.renderStudentInfos = this.renderStudentInfos.bind(this);
        this.searchResultLayout = this.searchResultLayout.bind(this);
    }
    renderStudentInfos(data){
        if (this.props.data["payload"] !== undefined ){
            const searchResult = data.map(datum => <StudentInfoModel 
                key={datum.nim_tpb} 
                name={datum.name} 
                nim_tpb={datum.nim_tpb}
                nim_jur={datum.nim_jur}
                prodi = {datum.prodi} 
            />)
    
            return (
                <>
                    <div className="col-md-4 p-2 mb-1 bg-dark text-white">
                        <h3 className="text-warning">&nbsp; SEARCH RESULT:</h3>
                    </div>
                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Prodi</th>
                            <th>NIM_TPB</th>
                            <th>NIM_Jurusan</th>
                        </tr>
                        </thead>
                        <tbody>
                        {searchResult}
                        </tbody>
                    </Table>
              </>
            )
        }
        return null;
    }

      
    searchResultLayout(){
        return(
            <>

                {this.renderStudentInfos(this.props.data["payload"])}
            </>
        )
    }

    render(){
        return( 
            <>
            {this.searchResultLayout()}
            </>
        )
    }
}


//expose this .js file so it can be imported by other modules:
export default SearchResultModel
import React from "react";
import { useParams } from "react-router-dom";
import {populateDetailedLogs} from "./LoggingSummary";
import EnhancedTable from "../components/Table/PaginatedTable";

import {
    GLYGEN_SERVER,
} from "../envVariables";

const DetailLogging = props => {

    let { data } = useParams();
    const [display, setDisplay] = React.useState(false);
    const [result, setResult] = React.useState("");
    populateDetailedLogs(data).then(response => {
        console.log(response.data);
        setResult(response.data.logs);
        setDisplay(true);
      });

    var tableHeaders =  "";
    var keys = "";
    var links = "";
    if (JSON.parse(data).page !== undefined) {
        tableHeaders =["ID","Log Message", "User", "Timestamp"];
        keys = ["id","message","user","created"];
        links = [false, false, false, false];
    }    
    else if (JSON.parse(data).user !== undefined) {
        tableHeaders =["ID","Log Message", "Page", "Timestamp"];
        keys = ["id","message","page","created"];
        links = [false, false, false, false];
    }    
    else {
        tableHeaders =["ID","Log Message", "Page", "User", "Timestamp"];
        keys = ["id","message","page","user","created"];
        links = [false, false, false, false, false];
    }    

    return (
        <div className="base-container">
       
        <p>Server: {GLYGEN_SERVER}</p>
        <p>From: {JSON.parse(data).start_date}</p>
        <p>To: {JSON.parse(data).end_date}</p>
        {JSON.parse(data).page !== undefined &&  <p>Page: {JSON.parse(data).page}</p>}    
        {JSON.parse(data).user !== undefined &&  <p>User: {JSON.parse(data).user}</p>}       
        <p>Type: {JSON.parse(data).type}</p>
        <p>Logs: {JSON.parse(data).limit}</p>
        <div id="display">
        {display &&  (<EnhancedTable post={result} 
          tableName={"Log Details"}
          headers = {tableHeaders}
          dataField= {keys}
          linkIndex={links}
          allRecords={false}
          />)}
         </div> 
        </div>
      );
}

// async function populateDetailedLogs(start_date,end_date,page,type,log_count) {
//     var result = "";
//     const url = 'https://beta-api.glygen.org/log/access?query={"type":"'+type+'","start_date":"'+start_date+'","end_date":"'+end_date+'","page":"'+page+'","offset":1,"limit":'+log_count+',"order":"desc"}';
//     console.log(url);  
//     await fetch(url,
//         {method: 'POST',
//         headers: { 'Content-Type': 'application/json' }})
//         .then(res => res.json())
//         .then((resJson) => {
//           result = resJson;
//          })
//              .catch((error)=>{
//                console.log(error);
//              });
//     return result;                   
// }

export default DetailLogging;
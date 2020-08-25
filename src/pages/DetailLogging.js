import React from "react";
import { useParams } from "react-router-dom";
import {populateDetailedLogs,populateDetailedGroupLogs} from "./LoggingSummary";
import EnhancedTable from "../components/Table/PaginatedTable";
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DashBoardHeader from "./DashBoardHeader";

import {
    GLYGEN_SERVER,
} from "../envVariables";

const AntSwitch = withStyles((theme) => ({
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: 'flex',
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
      '&$checked': {
        transform: 'translateX(12px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: 'none',
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  }))(Switch);
  
const DetailLogging = props => {

    let { data } = useParams();
    const [displayDetails, setDisplayDetails] = React.useState(false);
    const [displayDetailsGroup, setDisplayDetailsGroup] = React.useState(false);
    const [result, setResult] = React.useState("");
    const [resultGroup, setResultGroup] = React.useState("");
    const [state, setState] = React.useState({
        checkedC: false,
      });

      var tableHeaders =  "";
      var keys = "";
      var links = "";  
      var dataTypeNumericList = "";
      var groupTableHeaders = ["Log Message", "Count"];
      var groupKeys = ["message","count"];
      var groupLinks = [false, false];
      var groupDataTypeIsNumeric = [false,true];
      if (JSON.parse(data).page !== undefined) {
        tableHeaders =["ID","Log Message", "User", "Timestamp"];
        keys = ["id","message","user","created"];
        links = [false, false, false, false];
        dataTypeNumericList = [false,false,false,true];
    }    
    else if (JSON.parse(data).user !== undefined) {
        tableHeaders =["ID","Log Message", "Page", "Timestamp"];
        keys = ["id","message","page","created"];
        links = [false, false, false, false];
        dataTypeNumericList = [false,false,false,true];
    }    
    else {
        tableHeaders =["ID","Log Message", "Page", "User", "Timestamp"];
        keys = ["id","message","page","user","created"];
        links = [false, false, false, false, false];
        dataTypeNumericList = [false,false,false,false,true];
    }   
      populateDetailedLogs(data).then(response => {
        setResult(response.data.logs); 
        setDisplayDetails(true);
      });
      
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        console.log(event.target.checked, "event.target.checked ");
        if (event.target.checked && resultGroup === "") {
            populateDetailedGroupLogs(data).then(response => {
                setResultGroup(response.data.logs);
                setDisplayDetailsGroup(true);
                
            });
            setDisplayDetails(false);
        }
        else if (event.target.checked) {
            setDisplayDetails(false);
            setDisplayDetailsGroup(true);
        }
        else {
            setDisplayDetailsGroup(false);
            setDisplayDetails(true);
        }
        
    };
    return (
        <div className="base-container">
        <div><DashBoardHeader/></div>
        <p>Server: {GLYGEN_SERVER}</p>
        <p>From: {JSON.parse(data).start_date}</p>
        <p>To: {JSON.parse(data).end_date}</p>
        {JSON.parse(data).page !== undefined &&  <p>Page: {JSON.parse(data).page}</p>}    
        {JSON.parse(data).user !== undefined &&  <p>User: {JSON.parse(data).user}</p>}       
        <p>Type: {JSON.parse(data).type}</p>
        <p>Logs: {JSON.parse(data).limit}</p>
        <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1} >
            <p>Group Same messages: </p>
          <Grid item>No</Grid>
          <Grid item>
            <AntSwitch checked={state.checkedC} onChange={handleChange} name="checkedC" />
          </Grid>
          <Grid item>Yes</Grid>
        </Grid>
      </Typography>
      <br/>
        <div id="display">
        {displayDetails &&  (<EnhancedTable post={result} 
          tableName={"Log Details"}
          headers = {tableHeaders}
          dataField= {keys}
          linkIndex={links}
          allRecords={false}
          dataTypeIsNumeric = {dataTypeNumericList}
          />)}
         {displayDetailsGroup &&  (<EnhancedTable post={resultGroup} 
          tableName={"Log Details"}
          headers = {groupTableHeaders}
          dataField= {groupKeys}
          linkIndex={groupLinks}
          allRecords={true}
          dataTypeIsNumeric = {groupDataTypeIsNumeric}
          />)} 
         </div> 
        </div>
      );
}



export default DetailLogging;
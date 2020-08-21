import { format } from "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import ReactDOM from "react-dom";
import Moment from "react-moment";
import "moment-timezone";
import {populateSummaryTables} from "./LoggingSummary";
import timeToQueryFormat from "../utils/DateUtils";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Button from "@material-ui/core/Button";
import EnhancedTable from "../components/Table/PaginatedTable";

export default function MaterialUIPickers() {
  // The first commit of Material-UI
  const date = new Date();
  date.setDate(date.getDate() - 7);
  const [startDate, setStartDate] = React.useState( 
    new Date(date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear())
  );
  const [pageFrequencies, setPageFrequencies] = React.useState("");
  const [accessFrequencies, setAccessFrequencies] = React.useState("");
  const [userFrequencies,setUserFrequencies] = React.useState("");
  const [endDate, setEndDate] = React.useState(new Date());
  const [startTime, setStartTime] = React.useState(new Date());
  const [endTime, setEndTime] = React.useState(new Date());
  const [display, setDisplay] = React.useState(false);
  const [misc, setMisc] = React.useState("");
  const handleStartDateChange = (date) => {
    setStartDate(date);
  };
  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleStartTimeChange = (time) => {
    setStartDate(time);
  };

  const handleEndTimeChange = (time) => {
    setEndDate(time);
  };

  function setDateTimeNow() {
    setEndDate(new Date());
    setEndTime(new Date());
  }
  
  
  const processDateTime =(e) => {

    e.preventDefault();
    if (startDate > endDate) {
    } else {
      const end_date = timeToQueryFormat(endDate);
      const start_date = timeToQueryFormat(startDate);
      const tempMisc ={
        startDate: start_date,
        endDate: end_date
      }
      
      console.log(start_date);
       populateSummaryTables(start_date, end_date).then(response => {
        console.log(response.data);
        setPageFrequencies(response.data.pages);
        setAccessFrequencies(response.data.types);
        setUserFrequencies(response.data.users);
        setMisc(tempMisc);
        setDisplay(true);
      });
    }
  };

  function setCustomStartDate(duration) {
    if (duration == "30") {
      var moment = require("moment");   
      setStartDate(moment().add(-1, "months").toDate());
    }
    if (duration == "180") {
      var moment = require("moment");
      setStartDate(moment().add(-6, "months").toDate());
    }
    if (duration == "7") {
      var moment = require("moment");
      setStartDate(moment().add(-7, "days").toDate());
    }
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div id="homecontent-mid" class="row rounded">
        <div id="homemidcontent" class="rounded">
          <div id="home-mid-mid">
            <label>Start Date Time: </label>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Start Date"
              value={startDate}
              maxDate={new Date()}
              onChange={handleStartDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />

            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="Time picker"
              timeFormat="g:ia"
              value={startDate}
              onChange={handleStartTimeChange}
              KeyboardButtonProps={{
                "aria-label": "change time",
              }}
            />

            <Button  className="text-center" size="small" style={{ fontWeight: "bold", color: "#2f78b7" }} 
          variant="outline-secondary" onClick={() => setCustomStartDate("7")}>7 day</Button>

            <Button
              className="text-center"
              size="small"
              style={{ fontWeight: "bold", color: "#2f78b7" }}
              variant="outline-secondary"
              onClick={() => setCustomStartDate("30")}
            >
              Last Month
            </Button>

            <Button
              className="text-center"
              size="small"
              style={{ fontWeight: "bold", color: "#2f78b7" }}
              variant="outline-secondary"
              onClick={() => setCustomStartDate("180")}
            >
              Half year
            </Button>
          </div>
          <br /> <br /> <br />
          <div id="home-mid-mid">
            <label>End Date Time: </label>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="End Date"
              value={endDate}
              maxDate={new Date()}
              onChange={handleEndDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="Time picker"
              timeFormat="g:ia"
              value={endDate}
              onChange={handleEndTimeChange}
              KeyboardButtonProps={{
                "aria-label": "change time",
              }}
            />
            <Button
              className="text-center"
              size="small"
              style={{ fontWeight: "bold", color: "#2f78b7" }}
              variant="outline-secondary"
              onClick={setDateTimeNow}
            >
              Now
            </Button>

            <Button
              className="text-center"
              size="small"
              style={{ fontWeight: "bold", color: "#2f78b7" }}
              variant="outline-secondary"
              onClick={processDateTime}
            >
              Fetch
            </Button>
          </div>
        </div>
      </div>

      <div id="display">
        {display && (
          <EnhancedTable post={pageFrequencies} 
          tableName={"Page-wise frequencies"}
          headers= {["Page","Accesses","Error"]}
          dataField= {["page","access","error"]}
          linkIndex={[false,true,true]}
          allRecords={true}
          miscellanious={misc}
         />
        )}
        {display &&  (<EnhancedTable post={accessFrequencies} 
          tableName={"Access-type frequencies"}
          headers= {["Access Type","Accesses"]} 
          dataField= {["type","number"]}
          linkIndex={[false,true]}
          allRecords={true}
          miscellanious={misc}
          />)}
        {display &&  (
          <EnhancedTable post={userFrequencies}   
          tableName={"User-wise frequencies"}
          headers= {["User","Accesses","Errors"]}
          dataField={["user","access","error"]} 
          linkIndex={[false,true,true]}
          allRecords={true}
          miscellanious={misc}
          />)}  
      </div>
    </MuiPickersUtilsProvider>
  );
}


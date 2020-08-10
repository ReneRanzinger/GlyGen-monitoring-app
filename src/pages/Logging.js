import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import ReactDOM from 'react-dom';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';



export default function MaterialUIPickers() {
  // The first commit of Material-UI
  const date = new Date();
  date.setDate(date.getDate()-7);
  const [startDate, setStartDate] = React.useState((date.getMonth()+1)+'/'+ date.getDate() +'/'+date.getFullYear());
  const [endDate, setEndDate] = React.useState(new Date());
  const [startTime, setStartTime] = React.useState(new Date());
  const [endTime, setEndTime] = React.useState(new Date());
  const [display, setDisplay] = React.useState(false);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };
  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleStartTimeChange = (time) => {
    setStartTime(time);
  };

  const handleEndTimeChange = (time) => {
    setEndTime(time);
  };

  function setDateTimeNow() {
    setEndDate(new Date());
    setEndTime(new Date());
  }

  return (
    
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <p>Start Date Time: </p>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Start Date"
          value={startDate}
          onChange={handleStartDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={startTime}
          onChange={handleStartTimeChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />

        <p>End Date Time: </p>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="End Date"
          value={endDate}
          onChange={handleEndDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={endTime}
          onChange={handleEndTimeChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
        <Button  className="text-center" size="small" style={{ fontWeight: "bold", color: "#2f78b7" }} 
          variant="outline-secondary" onClick={setDateTimeNow}>Now</Button>

        <Button  className="text-center" size="small" style={{ fontWeight: "bold", color: "#2f78b7" }} 
          variant="outline-secondary" onClick={processDateTime}>Fetch</Button>  
      </Grid>
      <div id="display">
      {display && <div className="base-container">
    <p>{startDate.toString()}</p>
    <p>{endDate.toString()}</p>
    <p>{startTime.toString()}</p>
    <p>{endTime.toString()}</p>
    </div>}
      </div>
    </MuiPickersUtilsProvider>
  );

  function processDateTime() {
    setDisplay(true);
    // ReactDOM.render( <div className="base-container">
    // <p>{startDate.toString()}</p>
    // <p>{endDate.toString()}</p>
    // <p>{startTime.toString()}</p>
    // <p>{endTime.toString()}</p>
    // </div>, document.getElementById('display'));
 
  }
}

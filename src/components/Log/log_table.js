import React from  "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "react-dropdown"

export class LogHome extends React.Component{

    constructor(props){
        super(props);
    }

    options = [
        'one', 'two', 'three'
      ]
         
    state = {
        startDate: new Date() -7,
        endDate: new Date()
      };
    
      handleChangestartDate = date => {
        this.setState({
          startDate: date
        });
    };
    
    handleChangeendDate = date => {
        this.setState({
          endDate: date
        });
    };

    render() {
        return (
          <div> 
          <Dropdown options={this.options} onChange={this._onSelect} value={this.defaultOption} placeholder="Select an option" />

          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChangestartDate}
          />
           
          <DatePicker
            selected={this.state.endDate}
            onChange={this.handleChangeendDate}
          />
          </div>
        );
      }
}
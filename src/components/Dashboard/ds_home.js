import React from  "react";
import './ds_home.css';
import log_img from "./log.png";
import message_img from "./message.jpeg"
import {Redirect} from 'react-router-dom';
import { DSlog } from "./log_table";
import { DSmessage } from "./message_table";

export class DSHome extends React.Component{

    constructor(props){
        super(props);


        this.state = {
            redirectToMessage: false,
            redirectToLog: false
            };
        this.message = this.message.bind(this);
        this.log = this.log.bind(this);
    }





    message(){

        this.setState({redirectToMessage: true});
     
    };

    log(){
        this.setState({redirectToLog: true});
    };



    render() {

        if (this.state.redirectToMessage){
            return (
              <div className="App">
              <DSmessage/>
             </div>
            );
          }

          else if(this.state.redirectToLog){
            return (
              <div className="App">
              <DSlog/>
             </div>
            );
          }

        return (
            <div>
            <div className="split left" >
             <div className="centered">
               <img src={message_img} alt="Messages" onClick={this.message} />
               <h2>Click for messages</h2>
               <p>Message Table</p>
              </div>
            </div>
          
          <div className="split right" onClick={this.log}>
            <div className="centered">
            <img src={log_img} alt="Logs" />
               <h2>Click for Logs</h2>
               <p>Log Table</p>
            </div>
          </div> 
          </div>
        );
    }

}
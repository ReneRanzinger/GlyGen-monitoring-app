import React from  "react";
import './ds_home.css';
import log_img from "./log.png";
import message_img from "./message.jpeg"
import { useHistory } from 'react-router-dom';
import { DSlog } from "./log_table";
import { DSmessage } from "./message_table";

export class DSHome extends React.Component{

    constructor(props){
        super(props);

        this.message = this.message.bind(this);
    }





    message(){

        console.log("click registered");
        let history = useHistory();
        history.push('./ds_home');
     
    };

    log(){

    };



    render() {

        return (
            <div>
            <div class="split left"  onClick={this.message}>
             <div class="centered">
               <img src={message_img} alt="Messages" />
               <h2>Click for messages</h2>
               <p>Message Table</p>
              </div>
            </div>
          
          <div class="split right" onClick={this.log}>
            <div class="centered">
            <img src={log_img} alt="Logs" />
               <h2>Click for Logs</h2>
               <p>Log Table</p>
            </div>
          </div> 
          </div>
        );
    }

}
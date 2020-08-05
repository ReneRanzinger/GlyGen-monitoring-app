import React from  "react"
import {Redirect} from 'react-router-dom';
import loginImg from "../../login.svg"
import {DSHome} from "./index"

export class Login extends React.Component{

    constructor(props){
        super(props);

        this.state = {
          username: '',
          password: '',
          redirectToReferrer: false
          };
          this.login = this.login.bind(this);
          this.onChange = this.onChange.bind(this);
    }




    login() {
      //API Action Here

      if(this.state.username && this.state.password){
        this.setState({redirectToReferrer: true});
      }
     
    }
     
     
     onChange(e){
       console.log("idhar aya");
      this.setState({[e.target.name]:e.target.value});
     }
    



    render() {

      if (this.state.redirectToReferrer){
        return (
          <div className="App">
          <DSHome/>
         </div>
        );
      }

        return (
          <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Login</div>
            <div className="content">
              <div className="image">
                <img src={loginImg} />
              </div>
              <div className="form">
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text" name="username" placeholder="username"  onChange={this.onChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" placeholder="password"  onChange={this.onChange} />
                </div>
              </div>
            </div>
            <div className="footer">
              <button type="button" className="btn"  onClick={this.login} >
                Login
              </button>
            </div>
          </div>
        );
      }
    }
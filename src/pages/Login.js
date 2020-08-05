import React, {useState} from  "react"
import loginImg from "../login.svg"


export default function Login(props) {
    const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");

    function login() {
          //if(this.state.username && this.state.password){
          //this.setState({redirectToReferrer: true});
          props.history.push("./dashboard")
        }
       
      
       
       
       function onChange(e){
         //console.log("idhar aya");
        //this.setState({[e.target.name]:e.target.value});
       }
      
  
  
  
      
  
  
    
    return (
        <div className="base-container">
            {/* <AnonymousHeader/> */}
          <div className="header">Login</div>
          <div className="content">
            <div className="image">
              <img src={loginImg} />
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="username"  onChange={onChange} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="password"  onChange={onChange} />
              </div>
            </div>
          </div>
          <div className="footer">
            <button type="button" className="btn"  onClick={login} >
              Login
            </button>
          </div>
        </div>
      )
}   
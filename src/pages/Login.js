import React, {useState} from  "react"
import loginImg from "../login.svg"
import { reject } from "q";
import BootstrapNavbar from "./BootsrtapNavbar"


export default function Login(props) {
    const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  
  

    function login() {

  
      if(userName && password){

        var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(re.test(userName)==true){
             fetch('https://beta-api.glygen.org/auth/login?query={"email":"'+userName+'","password":"'+password+'"}',
             {method: 'POST',
             headers: { 'Content-Type': 'application/json' }})
                 .then(res => res.json())
                 .then((resJson) => {
                   console.log(resJson);
                   if(resJson.type==="success"){
                     localStorage.setItem('log_token',resJson.token);
                     props.history.push("./dashboard")
                   }
                   else{
                     alert("LOGIN ERROR!");
                   }
                  })
                  .catch((error)=>{
                    reject(error);
                  });
         }         
      }
      else{
      alert("Enter Details");
      }

        }
        
       
    
      
  
  
    
    return (
      
        <div className="base-container">

          <div className="header">  <BootstrapNavbar/> </div>
          <div className="content">
            <div className="image">
              <img src={loginImg} />
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="email" 
                  name="username"
                  placeholder="abx@xyz.com"
                  required 
                  value={userName} 
                  onChange={e => setUserName(e.target.value)} />

            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" 
                 name="password" 
                 placeholder="password" 
                 value={password}  
                 onChange={e => setPassword(e.target.value)} />
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
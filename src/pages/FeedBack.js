import React from  "react";
import ProtectedBootstrapNavbar from "./ProtectedBootstrapNavbar"

export default function FeedBack() {
    
     
    // return (
    //     <div>
    //       <p>Hello World!</p>
    //     </div>
    //   );

    return (
        <div className="base-container">
          	<div className="header">  <ProtectedBootstrapNavbar/> </div>
        {/* <AuthenticatedHeader/>     */}
        <p>Hello FeedBack!</p>
        <a href="./login">Login</a>  
        
        </div>
      )
}    
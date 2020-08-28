import React from  "react";

import ProtectedBootstrapNavbar from "./ProtectedBootstrapNavbar"


export default function Events() {
    
     
    // return (
    //     <div>
    //       <p>Hello World!</p>
    //     </div>
    //   );

    return (
        <div className="base-container">
          <div className="header">  <ProtectedBootstrapNavbar/> </div>
        {/* <AuthenticatedHeader/>     */}
        <p>Hello Events!</p>
        <a href="./login">Login</a>  
        
        </div>
      )
}    
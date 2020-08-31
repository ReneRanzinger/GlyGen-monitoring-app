import React,{useState} from  "react";
import ProtectedBootstrapNavbar from "./ProtectedBootstrapNavbar";
import { getJson} from "../utils/api";
import EnhancedTable from "../components/Table/PaginatedTable";

export default function FeedBack() {
  const [visibility, setVisibility] = useState("");
  const [entry, setEntry] = useState("");
  const [display, setDisplay] = React.useState(false);  
  const [contactData, setContactData] =React.useState("");



function getWsUrl (request) {

  switch (request) {
    case "contact":
        return "/auth/contactlist";
    break;
    case "delete":
        return "/auth/contactupdate";
    break;    
 
}
}


     
   function getData(){
    contactApi().then(response => {
      console.log(response.data);
      setContactData(response.data);
      setDisplay(true);              
    });
   }



   function contactApi(){
    console.log("ad");
    var token = localStorage.getItem("log_token");
    console.log(token);

    const url = getWsUrl('contact')+'?query={"token":"'+token+'","visibility":"'+visibility+'"}';
    console.log(url); 
    return getJson(url);

     }
   


     function delEntry(){
      var token = localStorage.getItem("log_token");
      const url = getWsUrl('delete')+'?query={"token":"'+token+'","id":"'+entry+'"}';
      console.log(url); 
      return getJson(url);
     }



    return (
        <div className="base-container">
          	<div className="header">  <ProtectedBootstrapNavbar/> </div>
        {/* <AuthenticatedHeader/>     */}
        <form>
        <label>
             Type of Logs:
              <input type="text" name="name" placeholder="all"  value={visibility} 
                onChange={e => setVisibility(e.target.value)} />
         </label>
         <input type="button" value="Submit"  onClick={getData}/>
        </form>


        <form>
        <label>
             Delete Entry:
              <input type="text" name="name" placeholder="all"  value={entry} 
                onChange={e => setEntry(e.target.value)} />
         </label>
         <input type="button" value="Submit"  onClick={delEntry}/>
        </form>

        {display && (
          <EnhancedTable post={contactData} 
          tableName={"Contact Table"}
          headers= {["From","ID","Message","Status","Subject","Time Stamp"]}
          dataField= {["from","id","message","status","subject","update_time"]}
          dataTypeIsNumeric={[false,false,false, false, false,false]}
          linkIndex={[false,false,false,false,false,false]}
          allRecords={true}
         
         />
        )}
                
        <a href="./dashboard">Home</a>  
        
        </div>
      )
}    
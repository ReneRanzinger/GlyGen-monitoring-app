import { reject } from "q";

import {
    GLYGEN_API,
} from "../envVariables";


function getWsUrl (request) {

    switch (request) {
	    case "summary":
	        return  GLYGEN_API + "/log/init";
			break;
		case "details_all":
			return GLYGEN_API  + "/log/access";
			break;
		case "details_grouped":
			return GLYGEN_API + "/log/grouped";
			break;			
    }
}

async function populateSummaryTables(startDate, endDate) {
    var result = "";
    console.log(GLYGEN_API);
    const url = getWsUrl('summary')+'?query={"start_date":"'+startDate+'","end_date":"'+endDate+'"}';
    console.log(url);
    
    await fetch(url,
        {method: 'POST',
        headers: { 'Content-Type': 'application/json' }})
        .then(res => res.json())
        .then((resJson) => {
          result = resJson;
         })
             .catch((error)=>{
               reject(error);
             });
    return result;                   
}

export default populateSummaryTables;
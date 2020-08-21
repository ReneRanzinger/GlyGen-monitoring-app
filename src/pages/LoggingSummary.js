import { reject } from "q";
import { getJson} from "../utils/api";
import React from "react";


function getWsUrl (request) {

    switch (request) {
	    case "summary":
	        return "/log/init";
			break;
		case "details_all":
			return "/log/access";
			break;
		case "details_grouped":
			return "/log/grouped";
			break;			
    }
}

export function populateSummaryTables(startDate, endDate) {
    const url = getWsUrl('summary')+'?query={"start_date":"'+startDate+'","end_date":"'+endDate+'"}';
    console.log(url); 
    return getJson(url);              
}


export function populateDetailedLogs(query) {
    
    //const url = getWsUrl('details_all')+'?query={"type":"'+type+'","start_date":"'+start_date+'","end_date":"'+end_date+'","page":"'+page+'","offset":1,"limit":'+log_count+',"order":"desc"}';
    const url = getWsUrl('details_all')+'?query='+query;
    //console.log(url, "url");
    return getJson(url);              
}

export function populateDetailedGroupLogs(query) {
    
    //const url = getWsUrl('details_all')+'?query={"type":"'+type+'","start_date":"'+start_date+'","end_date":"'+end_date+'","page":"'+page+'","offset":1,"limit":'+log_count+',"order":"desc"}';
    const url = getWsUrl('details_grouped')+'?query='+query;
    //console.log(url, "url");
    return getJson(url);              
}

import { getJson} from "../utils/api";


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
    return getJson(url);              
}


export function populateDetailedLogs(query) {
    const url = getWsUrl('details_all')+'?query='+query;
    return getJson(url);              
}

export function populateDetailedGroupLogs(query) {
    const url = getWsUrl('details_grouped')+'?query='+query;
    return getJson(url);              
}

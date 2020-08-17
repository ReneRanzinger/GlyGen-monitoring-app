import Moment from "react-moment";
import "moment-timezone";

/**
 * converts a generic datetime object into the required query format in EDT time for the webservice call i.e. YYYY-M-D H:m:s [EDT]-0400
 * @param {Date} datetime - a datetime object
 * @returns the formatted datetime string
 */
 function timeToQueryFormat(datetime) {
    var moment = require("moment"); 
    return moment(new Date(datetime.getTime() + datetime.getTimezoneOffset()*60*1000 - 300*60*1000)).format('YYYY-M-D H:m:s [EST]-0500');
}

export default timeToQueryFormat;
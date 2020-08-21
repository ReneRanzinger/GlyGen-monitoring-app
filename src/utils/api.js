import axios from "axios";
import { GLYGEN_API } from "../envVariables";

export const getJson = (url, headers = {}) => {
  return axios.get(GLYGEN_API + url, {
    headers
  });
};
import { hostNameUrl } from "../config/api";
import axios from "axios";

export const findBonds = () => {
  return axios.get(`${hostNameUrl}/bonds`);
};
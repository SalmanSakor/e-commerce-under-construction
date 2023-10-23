import axios from "axios";
import { baseURL } from "../API/API";
import Cookie from "cookie-universal";

const cookie = Cookie();
const token = cookie.get("token");

// Any process inside Dashboard needs to be sent headers
export const Axios = axios.create({
  baseURL: baseURL,
  headers: { Authorization: `Bearer ${token}` },
});

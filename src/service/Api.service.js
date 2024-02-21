import { BASE_URL } from "@/lib/constant";
import axios from "axios";

export const api = axios.create({
  baseURL: BASE_URL,
});

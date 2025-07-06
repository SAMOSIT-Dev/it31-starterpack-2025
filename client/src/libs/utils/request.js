import { env } from "@/config/env";
import axios from "axios";

export const request = axios.create({
    baseURL: env.API_SERVER_URL,
});

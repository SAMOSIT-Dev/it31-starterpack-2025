import axios from "axios";

export const request = axios.create({
    baseURL: 'http://it31-starterpack.sit.kmutt.ac.th/samosit/it31starterpack',
});

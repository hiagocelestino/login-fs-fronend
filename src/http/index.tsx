import axios from "axios";
import { tokenService } from "../services/authService";

const http = axios.create({
    baseURL: 'http://localhost:5000/'
})

export default http;
import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

export const registerUser = (data) => axios.post(`${BASE_URL}/auth/register`, data);
export const makePayment = (data) => axios.post(`${BASE_URL}/payment`, data);
export const fetchQuestions = (userId) => axios.get(`${BASE_URL}/assessment/${userId}`);

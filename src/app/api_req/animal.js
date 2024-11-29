import axios from "axios";
import 'dotenv/config'

const API_BASE_URL = "https://animal-backend-ngsj.onrender.com" || "http://localhost:5000/api";

export const fetchAllAnimals = async (params = {}) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/animals`,{params});
    return response.data; 
  } catch (error) {
    console.error("Error fetching animals:", error);
    throw error; 
  }
};

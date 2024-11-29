import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api";

export const fetchAllAnimals = async (params = {}) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/animals`,{params});
    return response.data; 
  } catch (error) {
    console.error("Error fetching animals:", error);
    throw error; 
  }
};

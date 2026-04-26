// utils/dataFetch.js
import apiClient from "@/utils/apiClient";

export async function getData() {
  try {
    const response = await apiClient.get("/v1/api-data");
    return response.data;
  } catch (error) {
    console.error("Axios Fetch Error:", error.response?.data || error.message);
    throw error;
  }
}

export async function getVisitorData() {
  try {
    const response = await apiClient.get("/v1/api-data/visitors");
    return response.data;
  } catch (error) {
    console.error("Axios Fetch Error:", error.response?.data || error.message);
    throw error;
  }
}

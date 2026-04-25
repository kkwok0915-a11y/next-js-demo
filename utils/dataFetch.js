// utils/dataFetch.js
import apiClient from "@/utils/apiClient";

export async function getData() {
  try {
    // No need to manually check res.ok; Axios throws if it's not
    const response = await apiClient.get("/v1/api-data1");
    return response.data;
  } catch (error) {
    console.error("Axios Fetch Error:", error.response?.data || error.message);
    throw error;
  }
}

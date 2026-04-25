// utils/dataFetch.js
import apiClient from "@/utils/apiClient";

export async function getData() {
  try {
    // No need to manually check res.ok; Axios throws if it's not
    const response = await apiClient.get("/v1/api-data");
    return response.data;
  } catch (error) {
    // This will now catch 404s, 500s, and network timeouts
    console.error("Axios Fetch Error:", error.response?.data || error.message);
    return []; // Return fallback to prevent page crash
  }
}

import apiClient from "@/utils/apiClient";

export async function getData() {
  const res = await apiClient.get("/v1/api-data");
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.data;
}

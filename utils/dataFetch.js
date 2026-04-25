import apiClient from "@/utils/apiClient";

export async function getData() {
  const res = await apiClient.get("/v1/api-data");
  console.log(res);
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.data;
}

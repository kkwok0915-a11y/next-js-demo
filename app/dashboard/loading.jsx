import apiClient from "@/utils/apiClient";

async function getData() {
  const res = await apiClient.get("/api-data");
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

export default function Loading() {
  // You can render any UI inside Loading, including Skeleton loaders
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      <p className="ml-4 text-lg font-medium">Loading data...</p>
    </div>
  );
}

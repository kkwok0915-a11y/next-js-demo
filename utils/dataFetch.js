// utils/dataFetch.js
export async function getData() {
  // 1. You MUST use an absolute URL when fetching on the server.
  // Replace this with your actual production or dev URL.
  const baseUrl = "https://express-js-on-vercel-five-tau.vercel.app";

  try {
    const res = await fetch(`${baseUrl}/v1/api-data`, {
      cache: "no-store", // Ensures the dashboard always shows fresh data
    });

    if (!res.ok) {
      // Check your TERMINAL (VS Code) to see this error log
      console.error(`Fetch failed: ${res.status} ${res.statusText}`);
      return [];
    }

    return await res.json();
  } catch (error) {
    // This logs to your server console, not the browser
    console.error("Critical Fetch Error:", error);
    throw error;
  }
}

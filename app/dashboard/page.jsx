export const dynamic = "force-dynamic"; //
import { getData } from "@/utils/dataFetch";
import DashboardClient from "../../components/dashboard-client";

export default async function Page() {
  try {
    const data = await getData();
    // If data is null or undefined, pass an empty array to avoid DataTable errors
    return <DashboardClient initialData={data ?? []} />;
  } catch (error) {
    console.error("Dashboard Page Error:", error);
    // Show a basic fallback instead of the generic 'Server Error'
    return (
      <div className="p-10 text-center">
        <h1>Unable to load dashboard data.</h1>
        <p>Please check if your API is running.</p>
      </div>
    );
  }
}

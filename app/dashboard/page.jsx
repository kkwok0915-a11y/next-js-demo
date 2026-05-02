import { getData, getVisitorData } from "@/utils/data-fetch";
import DashboardClient from "@/components/dashboard-client";

export default async function Page() {
  const visitorData = (await getVisitorData()) ?? [];
  const data = await getData();
  return <DashboardClient initialData={data} chartData={visitorData} />;
}

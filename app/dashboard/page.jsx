export const dynamic = "force-dynamic"; //

import { getData } from "@/utils/dataFetch";
import DashboardClient from "../../components/dashboard-client";

export default async function Page() {
  const data = await getData();
  return <DashboardClient initialData={data} />;
}

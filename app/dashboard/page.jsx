// app/dashboard/page.jsx
export const dynamic = "force-dynamic";

import { getData } from "@/utils/dataFetch";
import DashboardClient from "@/components/dashboard-client";
import { Suspense } from "react";
import UserProfileLoading from "@/components/user-profile-loading";

export default async function Page() {
  const data = await getData();
  return (
    <Suspense fallback={<UserProfileLoading />}>
      <DashboardClient initialData={data} />;
    </Suspense>
  );
}

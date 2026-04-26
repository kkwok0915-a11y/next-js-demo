// app/dashboard/page.jsx
export const dynamic = "force-dynamic";

import DashboardClient from "@/components/dashboard-client";
import { Suspense } from "react";
import UserProfileLoading from "@/components/user-profile-loading";

export default async function Page() {
  return (
    <Suspense fallback={<UserProfileLoading />}>
      <DashboardClient />;
    </Suspense>
  );
}

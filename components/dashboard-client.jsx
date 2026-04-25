"use client";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SectionCards } from "@/components/section-cards";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { useSessionData } from "@/hooks/SessionHooks";

export default function DashboardClient({ initialData }) {
  const { userDetails } = useSessionData();

  return (
    <SidebarProvider
      style={{ "--sidebar-width": "18rem", "--header-height": "3rem" }}
    >
      <AppSidebar variant="inset" userDetails={userDetails} />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col gap-4 py-4">
          <SectionCards />
          <ChartAreaInteractive />
          <DataTable data={initialData} />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

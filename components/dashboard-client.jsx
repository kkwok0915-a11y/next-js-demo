"use client";

import { SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SectionCards } from "@/components/section-cards";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";

export default function DashboardClient({ initialData, chartData }) {
  return (
    <div>
      <SiteHeader />
      <div className="flex flex-1 flex-col gap-4 py-4">
        <SectionCards />
        <ChartAreaInteractive chartData={chartData} />
        <DataTable data={initialData} />
      </div>
    </div>
  );
}

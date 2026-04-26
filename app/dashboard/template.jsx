// components/Layout.jsx
import { AppSidebar } from "@/components/app-sidebar";
import NavWrapper from "@/components/NavWrapper";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

const Template = ({ children }) => {
  return (
    <div className="dashboard-content">
      <NavWrapper>
        <SidebarProvider
          style={{ "--sidebar-width": "18rem", "--header-height": "3rem" }}
        >
          <AppSidebar variant="inset" />
        </SidebarProvider>
      </NavWrapper>
      <SidebarInset>{children}</SidebarInset>
    </div>
  );
};

export default Template;

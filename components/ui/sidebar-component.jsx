import { AppSidebar } from "../app-sidebar";
import { SidebarInset, SidebarProvider } from "./sidebar";

export default function SideBarComponent({ children }) {
  return (
    <SidebarProvider
      style={{ "--sidebar-width": "18rem", "--header-height": "3rem" }}
    >
      <AppSidebar variant="inset" />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}

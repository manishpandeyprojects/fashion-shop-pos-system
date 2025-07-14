import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "~/components/nav-main";
import { NavProjects } from "~/components/nav-projects";
import { NavUser } from "~/components/nav-user";
import { TeamSwitcher } from "~/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "~/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Manish",
    email: "manish@epyc.in",
  },
  teams: [
    {
      name: "Advika Collections",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Products",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "All Products",
          url: "/all-products",
        },
        {
          title: "Add Products",
          url: "#",
        },
      ],
    },
    {
      title: "Categories",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "All Categories",
          url: "#",
        },
        {
          title: "Add Category",
          url: "#",
        },
      ],
    },
    {
      title: "Analytics",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Sales analytics",
          url: "#",
        },
        {
          title: "Best selling products",
          url: "#",
        },
        {
          title: "Profit analysis",
          url: "#",
        },
        {
          title: "Store performance",
          url: "#",
        },
      ],
    },
    {
      title: "Expenses & Finance",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Expenses overview",
          url: "#",
        },
        {
          title: "Add expense",
          url: "#",
        },
        {
          title: "Expense reports",
          url: "#",
        },
        {
          title: "Cash flow analysis",
          url: "#",
        },
      ],
    },
    {
      title: "Reports",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Daily reports",
          url: "#",
        },
        {
          title: "Weekly reports",
          url: "#",
        },
        {
          title: "Monthly reports",
          url: "#",
        },
        {
          title: "Yearly reports",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

"use client";

import {
  ChevronRight,
  SquareTerminal,
  Bot,
  Settings2,
  BookOpen,
} from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Year 1",
    url: "#",
    icon: SquareTerminal,
    isActive: true,
    items: [
      {
        title: "IGME 105",
        url: "#",
      },
      {
        title: "IGME 106",
        url: "#",
      },
    ],
  },
  {
    title: "Year 2",
    url: "#",
    icon: Bot,
    items: [
      {
        title: "1",
        url: "#",
      },
      {
        title: "2",
        url: "#",
      },
      {
        title: "3",
        url: "#",
      },
    ],
  },
  {
    title: "Year 3",
    url: "#",
    icon: BookOpen,
    items: [
      {
        title: "1",
        url: "#",
      },
      {
        title: "2",
        url: "#",
      },
      {
        title: "3",
        url: "#",
      },
      {
        title: "4",
        url: "#",
      },
    ],
  },
  {
    title: "Year 4",
    url: "#",
    icon: Settings2,
    items: [
      {
        title: "1",
        url: "#",
      },
      {
        title: "2",
        url: "#",
      },
      {
        title: "3",
        url: "#",
      },
      {
        title: "4",
        url: "#",
      },
    ],
  },
];

export function NavMain() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Courses</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <a href={subItem.url}>
                          <span>{subItem.title}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}

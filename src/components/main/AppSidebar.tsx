"use client"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import { useTheme } from "next-themes"
import { useState } from "react"
const items = [
    {
      title: "Home",
      url: "#",
      icon: Home,
    },
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
    },
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ]
export function AppSidebar() {
    const [isOpen,setIsOpen] = useState<boolean>(true)
    const {theme} = useTheme()
    return (
        <SidebarProvider open={isOpen} className={`z-50 ${theme==="light"?"bg-slate-300":"bg-slate-700"} backdrop-blur-md`}>
            <Sidebar>
                <SidebarContent className={`relative overflow-visible z-50 ${theme==="light"?"bg-slate-500":"bg-slate-950"} backdrop-blur-md`}>
                    <SidebarTrigger className="absolute top-20 -right-6" onClick={()=>setIsOpen(val=>!val)}/>
                    <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                        {items.map((item) => (
                            <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild>
                                <a href={item.url}>
                                <item.icon />
                                <span>{item.title}</span>
                                </a>
                            </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
                </Sidebar>
        </SidebarProvider>
    )
}
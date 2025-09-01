import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Home, Calendar, Settings, List, NotepadText } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Menu items.
const items = [
  {
    title: 'Beranda',
    url: '#',
    icon: Home,
  },
  {
    title: 'Daftar Ladang',
    url: '#',
    icon: List,
  },
  {
    title: 'Kalender',
    url: '#',
    icon: Calendar,
  },
  {
    title: 'Catatan',
    url: '#',
    icon: NotepadText,
  },
  {
    title: 'Settings',
    url: '#',
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="flex w-full min-w-0 flex-col p-10 pb-[36px]">
        <SidebarMenu className="">
          <SidebarMenuItem className="flex h-[83px] rounded-md">
            <SidebarMenuButton isActive className="flex px-4 gap-4">
              <Avatar className="w-[43px] h-[43px] rounded-full border">
                <AvatarImage src="#" alt="avatar" />
                <AvatarFallback>TS</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-xl leading-normal ">
                <span className="truncate font-medium">Tejo Sutrisno</span>
                <span className="truncate text-xs">tejo@example.com</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="pt-0">
          <SidebarGroupContent>
            <SidebarMenu className="gap-6">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="px-4 py-3 gap-7">
                    <a href={item.url}>
                      <item.icon className="w-7 h-7" />
                      <span className="text-xl leading-none">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

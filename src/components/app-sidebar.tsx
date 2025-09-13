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
    <Sidebar collapsible="offcanvas">
      <SidebarHeader className="flex w-full min-w-0 flex-col p-0 ">
        <SidebarMenu>
          <SidebarMenuItem className="flex h-[83px] rounded-md">
            <SidebarMenuButton className="flex p-10 gap-4 border-b-2 border-brand-secondary rounded-md hover:bg-brand-secondary rounded-b-none">
              <Avatar className="w-[43px] h-[43px] rounded-full ">
                <AvatarImage src="#" alt="avatar" />
                <AvatarFallback>TS</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-xl leading-normal text-white">
                <span className="truncate font-medium">Tejo Sutrisno</span>
                <span className="truncate text-xs">tejo@example.com</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="p-0">
        <SidebarGroup className="pt-4">
          <SidebarGroupContent>
            <SidebarMenu className="gap-4">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="px-4 py-3 gap-7 text-white hover:bg-brand-secondary hover:text-white"
                  >
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

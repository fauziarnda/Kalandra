import SidebarLayout from '@/components/layout/SidebarLayout';
// import { Card, CardHeader } from '@/components/ui/card';
import { SidebarTrigger } from '@/components/ui/sidebar';

export default function Dashboard() {
  return (
    <SidebarLayout>
      <header className="flex gap-2">
        <div className="flex">
          <SidebarTrigger className=" bg-blue-500" />
        </div>
        <h1 className="font-medium text-xl">Home</h1>
      </header>
      {/* <Card>
        <CardHeader className="text-blue-700">Helloword</CardHeader>
      </Card> */}
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="bg-muted/50 aspect-video rounded-xl" />
          <div className="bg-muted/50 aspect-video rounded-xl" />
          <div className="bg-muted/50 aspect-video rounded-xl" />
        </div>
        <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
      </div>
    </SidebarLayout>
  );
}

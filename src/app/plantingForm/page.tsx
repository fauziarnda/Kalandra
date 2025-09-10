'use client';

import SidebarLayout from '@/components/layout/SidebarLayout';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Bell } from 'lucide-react';
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
export default function Dashboard() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(2025, 5, 12)
  );
  return (
    <SidebarLayout>
      <div className="flex flex-col p-[39px] gap-5 min-h-screen overflow-hidden">
        <header className="flex justify-between">
          <div className="flex gap-[14px]">
            <SidebarTrigger />
            <h1 className="font-semibold text-2xl">Home</h1>
          </div>
          <div>
            <Button variant="outline" className="px-2 py-[6px]">
              <Bell color="#F29D35" />
              Hidupkan Notifikasi
            </Button>
          </div>
        </header>

        <Card className="flex flex-col p-6 gap-8 flex-1">
          <CardHeader className="flex gap-2 p-0 leading-none">
            <CardTitle className="text-[32px] font-bold">
              Buat Rencana Tanam
            </CardTitle>
            <CardDescription className="font-medium text-base max-w-[646px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </CardDescription>
          </CardHeader>

          <CardContent className="p-0">
            <form className="flex flex-col gap-5">
              <div className="grid gap-2">
                <Label
                  className="text-brand-black text-base font-semibold leading-none p-0"
                  htmlFor="input"
                >
                  Nama Ladang
                </Label>
                <Input type="text" placeholder="" required />
              </div>
              <div className="grid gap-2">
                <Label
                  className="text-brand-black text-base font-semibold leading-none p-0"
                  htmlFor="input"
                >
                  Jenis Tanaman
                </Label>
                <Input type="text" placeholder="" required />
              </div>
              <div className="grid gap-2">
                <Label
                  className="text-brand-black text-base font-semibold leading-none p-0"
                  htmlFor="input"
                >
                  Tanggal Tanam
                </Label>
                <Input type="date" placeholder="" required />
              </div>
              <div className="grid gap-2">
                <Label
                  className="text-brand-black text-base font-semibold leading-none p-0"
                  htmlFor="input"
                >
                  Luas Lahan
                </Label>
                <Input type="text" placeholder="" required />
              </div>
              <div className="grid gap-2">
                <Label
                  className="text-brand-black text-base font-semibold leading-none p-0"
                  htmlFor="textarea"
                >
                  Catatan
                </Label>
                <textarea
                  id="textarea"
                  placeholder="Tulis catatan di sini..."
                  required
                  className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-yellow min-h-[100px]"
                />
              </div>
            </form>
          </CardContent>
          <CardFooter className="p-0 flex justify-end">
            <Button size="lg">Submit</Button>
          </CardFooter>
        </Card>
      </div>
    </SidebarLayout>
  );
}

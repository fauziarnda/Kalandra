'use client';

import SidebarLayout from '@/components/layout/SidebarLayout';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Bell } from 'lucide-react';
import React from 'react';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';

export default function FieldDetail() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(2025, 5, 12)
  );
  return (
    <SidebarLayout>
      <div className="flex flex-col p-[39px] gap-5 min-h-screen max-h-screen  ">
        <header className="flex justify-between">
          <div className="flex gap-[14px]">
            <SidebarTrigger />
            <h1 className="font-semibold text-2xl">Dashboard</h1>
          </div>
          <div>
            <Button variant="outline" className="px-2 py-[6px]">
              <Bell color="#F29D35" />
              Hidupkan Notifikasi
            </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 min-h-0">
          {/* Kolom Kiri - Detail Rencana Tanam (8/12) */}
          <div className="lg:col-span-8">
            <Card className="flex flex-col p-6 gap-8 h-full     ">
              <CardContent className="flex flex-col gap-5 p-0">
                <div className="grid gap-2">
                  <Label className="text-brand-black text-base font-semibold leading-none p-0">
                    Nama Ladang
                  </Label>
                  <p className="border rounded-md px-3 py-2 text-sm bg-gray-50">
                    Ladang Jagung A
                  </p>
                </div>

                <div className="grid gap-2">
                  <Label className="text-brand-black text-base font-semibold leading-none p-0">
                    Jenis Tanaman
                  </Label>
                  <p className="border rounded-md px-3 py-2 text-sm bg-gray-50">
                    Jagung
                  </p>
                </div>

                <div className="grid gap-2">
                  <Label className="text-brand-black text-base font-semibold leading-none p-0">
                    Tanggal Tanam
                  </Label>
                  <p className="border rounded-md px-3 py-2 text-sm bg-gray-50">
                    2025-09-01
                  </p>
                </div>

                <div className="grid gap-2">
                  <Label className="text-brand-black text-base font-semibold leading-none p-0">
                    Luas Lahan
                  </Label>
                  <p className="border rounded-md px-3 py-2 text-sm bg-gray-50">
                    200 m²
                  </p>
                </div>

                <div className="grid gap-2">
                  <Label className="text-brand-black text-base font-semibold leading-none p-0">
                    Catatan
                  </Label>
                  <p className="border rounded-md px-3 py-2 text-sm bg-gray-50 min-h-[100px]">
                    Ladang ini digunakan untuk percobaan varietas baru.
                  </p>
                </div>
              </CardContent>

              <CardFooter className="flex justify-end gap-3 p-0">
                <Button variant="secondary">Edit Rencana</Button>
                <Button variant="destructive">Hapus Rencana</Button>
              </CardFooter>
            </Card>
          </div>

          {/* Kolom Kanan - Jadwal Aktivitas + Kalender (4/12) */}
          <div className="lg:col-span-4 flex flex-col gap-4 min-h-0">
            <div className="flex flex-row gap-2 ">
              <Button size="lg" className="w-full">
                Create Task
              </Button>
              <Button size="lg" variant="outline" className="w-full">
                Create Notes
              </Button>
            </div>

            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-lg border w-full"
              buttonVariant="ghost"
            />

            <Card className="flex flex-col flex-1 p-6 min-h-0">
              <CardHeader className="p-0 mb-4 flex flex-row justify-between items-center">
                <CardTitle className="text-base font-semibold text-brand-black leading-none">
                  Jadwal Aktivitas
                </CardTitle>
                <div className="text-xs font-normal">
                  Saturday, 14 September 2025
                </div>
              </CardHeader>

              <CardContent className="flex-1 overflow-y-auto flex flex-col gap-3 pr-1 pl-0 py-0 ">
                <div className="border rounded-md p-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium">Penyiraman</p>
                    <p className="text-sm text-gray-500">
                      Setiap 2 hari sekali
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      Edit
                    </Button>
                    <Button size="sm" variant="destructive">
                      Hapus
                    </Button>
                  </div>
                </div>
                <div className="border rounded-md p-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium">Pemupukan</p>
                    <p className="text-sm text-gray-500">2025-09-15</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      Edit
                    </Button>
                    <Button size="sm" variant="destructive">
                      Hapus
                    </Button>
                  </div>
                </div>
                <div className="border rounded-md p-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium">Pemupukan</p>
                    <p className="text-sm text-gray-500">2025-09-15</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      Edit
                    </Button>
                    <Button size="sm" variant="destructive">
                      Hapus
                    </Button>
                  </div>
                </div>
                <div className="border rounded-md p-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium">Pemupukan</p>
                    <p className="text-sm text-gray-500">2025-09-15</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      Edit
                    </Button>
                    <Button size="sm" variant="destructive">
                      Hapus
                    </Button>
                  </div>
                </div>
                <div className="border rounded-md p-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium">Pemupukan</p>
                    <p className="text-sm text-gray-500">2025-09-15</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      Edit
                    </Button>
                    <Button size="sm" variant="destructive">
                      Hapus
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}

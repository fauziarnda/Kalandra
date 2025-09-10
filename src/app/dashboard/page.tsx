'use client';

import SidebarLayout from '@/components/layout/SidebarLayout';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Bell } from 'lucide-react';
import React from 'react';
import CalltoactionSection from './calltoactionSection';
import FieldListSection from './FieldList';
import TodoCard from './TodoCard';

export default function Dashboard() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(2025, 5, 12)
  );
  const todoItems = [
    {
      id: 'ladang-1',
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      status: 'Ladang Kentang 1',
    },
    {
      id: 'ladang-2',
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      status: 'Ladang Kentang 2',
    },
    {
      id: 'ladang-3',
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      status: 'Ladang Kentang 3',
    },
    {
      id: 'ladang-4',
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      status: 'Ladang Kentang 1',
    },
    {
      id: 'ladang-4',
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      status: 'Ladang Kentang 1',
    },
  ];
  return (
    <SidebarLayout>
      <div className="flex flex-col p-[39px] gap-5 max-h-screen ">
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
        {/* Section 1 CTA */}
        <CalltoactionSection />

        {/* Section 2 Field */}
        <FieldListSection />

        <div className="flex flex-col md:flex-row gap-5 w-full pb-[39px] ">
          <TodoCard></TodoCard>

          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-lg border w-full"
            buttonVariant="ghost"
          />
        </div>
      </div>
    </SidebarLayout>
  );
}

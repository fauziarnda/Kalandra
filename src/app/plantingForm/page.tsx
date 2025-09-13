'use client';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
} from '@/components/ui/alert-dialog';
import { CheckCircle } from 'lucide-react';
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
import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';
export default function PlantingForm() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    namaLadang: '',
    jenisTanaman: '',
    tanggalTanam: '',
    luasLahan: '',
    catatan: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data', formData);

    const isSuccess = true;
    if (isSuccess) {
      setOpen(true);

      setFormData({
        namaLadang: '',
        jenisTanaman: '',
        tanggalTanam: '',
        luasLahan: '',
        catatan: '',
      });

      setTimeout(() => {
        setOpen(false);
        router.push('/dashboard');
      }, 4000);
    }
  };

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
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-2">
                <Label
                  className="text-brand-black text-base font-semibold leading-none p-0"
                  htmlFor="input"
                >
                  Nama Ladang
                </Label>
                <Input
                  id="nama"
                  type="text"
                  placeholder="Masukkan nama lahan"
                  required
                  value={formData.namaLadang}
                  onChange={(e) =>
                    setFormData({ ...formData, namaLadang: e.target.value })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label
                  className="text-brand-black text-base font-semibold leading-none p-0"
                  htmlFor="input"
                >
                  Jenis Tanaman
                </Label>
                <Input
                  id="jenis"
                  type="text"
                  placeholder="Masukkan jenis tanaman"
                  required
                  value={formData.jenisTanaman}
                  onChange={(e) =>
                    setFormData({ ...formData, jenisTanaman: e.target.value })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label
                  className="text-brand-black text-base font-semibold leading-none p-0"
                  htmlFor="input"
                >
                  Tanggal Tanam
                </Label>
                <Input
                  id="tanggal"
                  type="date"
                  required
                  value={formData.tanggalTanam}
                  onChange={(e) =>
                    setFormData({ ...formData, tanggalTanam: e.target.value })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label
                  className="text-brand-black text-base font-semibold leading-none p-0"
                  htmlFor="input"
                >
                  Luas Lahan
                </Label>
                <Input
                  id="luas"
                  type="text"
                  required
                  placeholder="XX m2"
                  value={formData.luasLahan}
                  onChange={(e) =>
                    setFormData({ ...formData, luasLahan: e.target.value })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label
                  className="text-brand-black text-base font-semibold leading-none p-0"
                  htmlFor="textarea"
                >
                  Catatan
                </Label>
                <textarea
                  id="catatan"
                  placeholder="Tulis catatan di sini..."
                  className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-yellow min-h-[100px]"
                  value={formData.catatan}
                  onChange={(e) =>
                    setFormData({ ...formData, catatan: e.target.value })
                  }
                />
              </div>
              <CardFooter className="p-0 flex justify-end">
                <Button size="lg" type="submit">
                  Submit
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>

        <AlertDialog open={open} onOpenChange={setOpen}>
          <AlertDialogContent className="">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 items-center ">
                <CheckCircle className="text-brand-primary w-6 h-6" />
                <h4 className="text-2xl font-bold text-brand-primary">
                  Success
                </h4>
              </div>
              <p className="text-base font-regular text-brand-blackd">
                Form telah berhasil di submit
              </p>
            </div>

            <AlertDialogHeader className="gap-0"></AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction onClick={() => setOpen(false)}>
                OK
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </SidebarLayout>
  );
}

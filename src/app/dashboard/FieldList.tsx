import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Leaf } from 'lucide-react';
export default function FieldListSection() {
  return (
    <div>
      <Card className="flex flex-col p-6 gap-[10px]">
        <CardHeader className="flex flex-row justify-between p-0 items-center">
          <CardTitle className="font-medium text-xl">Daftar Ladang</CardTitle>
          <Button variant="link">See More</Button>
        </CardHeader>

        <CardContent className="grid grid-cols-3 gap-6 auto-rows-min p-0 ">
          <Card className="flex flex-col p-4 gap-[10px] shadow-none">
            <CardHeader className="flex flex-row items-center gap-2 p-0">
              <Leaf
                className="bg-brand-primary p-[6px] w-10 h-10 rounded"
                color="white"
              />

              <CardTitle className="flex flex-col gap-1 font-medium text-base leading-none">
                Ladang Kentang 1
                <span className="font-light text-[8px]">
                  Created at : 08/07/2025
                </span>
              </CardTitle>
            </CardHeader>

            <CardContent className="flex flex-col p-0 gap-1 font-normal text-[10px] leading-normal">
              <p>Tanggal Tanam : 31/07/2025</p>
              <p>Jadwal Terakhir : 31/07/2025</p>
              <p>Jadwal Selanjutnya : 31/07/2025</p>
            </CardContent>

            <CardFooter className="grid grid-cols-3 gap-[6px] auto-rows-min p-0 overflow-hidden">
              <div className="flex flex-col items-center gap-0.5 p-2 bg-[#DDEEE5] text-brand-primary rounded-[4px]">
                <h3 className="text-sm font-medium">21 Hari</h3>
                <p className="text-[8px]">Usia Tanaman</p>
              </div>
              <div className="flex flex-col items-center gap-0.5 p-2 bg-[#DDEEE5] text-brand-primary rounded-[4px]">
                <h3 className="text-sm font-medium">21 Hari</h3>
                <p className="text-[8px]">Usia Tanaman</p>
              </div>
              <div className="flex flex-col items-center gap-0.5 p-2 bg-[#DDEEE5] text-brand-primary rounded-[4px]">
                <h3 className="text-sm font-medium">21 Hari</h3>
                <p className="text-[8px]">Usia Tanaman</p>
              </div>
            </CardFooter>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}

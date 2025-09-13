import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

// interface calltoactionProps {
//   children: React.ReactNode;
// }

export default function CalltoactionSection() {
  return (
    <div>
      <Card className="flex flex-col p-6 gap-4 bg-brand-primary text-white">
        <CardTitle className="text-[32px] font-medium">
          Lorem Ipsum Dolor Sit Amet
        </CardTitle>
        <CardDescription className="font-regular text-base max-w-[646px] text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </CardDescription>
        <Button
          asChild
          className="w-fit font-medium text-base px-[14px] py-[10px] text-brand-primary bg-white hover:bg-gray-200"
        >
          <Link href="/plantingForm">Buat Sekarang</Link>
        </Button>
      </Card>
    </div>
  );
}

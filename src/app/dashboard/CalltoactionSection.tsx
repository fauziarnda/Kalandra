import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';

// interface calltoactionProps {
//   children: React.ReactNode;
// }

export default function CalltoactionSection() {
  return (
    <div>
      <Card className="flex flex-col p-6 gap-4">
        <CardTitle className="text-[32px] font-medium">
          Lorem Ipsum Dolor Sit Amet
        </CardTitle>
        <CardDescription className="font-medium text-base max-w-[646px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </CardDescription>
        <Button className="w-fit font-medium text-base px-[14px] py-[10px]">
          Buat Sekarang
        </Button>
      </Card>
    </div>
  );
}

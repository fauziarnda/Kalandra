import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
export default function TodoCard() {
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
    <Card className="flex flex-col p-6 gap-[10px] max-w-lg w-full  ">
      <CardHeader className="flex flex-row justify-between p-0 items-center">
        <CardTitle className="font-medium text-xl">To Do List</CardTitle>
        <Button variant="link">See More</Button>
      </CardHeader>

      <CardContent className="p-0  ">
        <div className="flex flex-col space-y-3 ">
          {todoItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-3  rounded-md hover:bg-gray-100"
            >
              <Card className="p-[10px] flex flex-row w-full gap-[10px] items-start ">
                <Checkbox id={item.id} className="rounded-full" />
                <Label htmlFor={item.id} className="flex flex-col gap-[10px]">
                  <span className="font-normal text-sm">{item.name}</span>
                  <span
                    className={`text-[10px] px-2 py-1 text-white w-fit rounded-md ${
                      item.status === 'Ladang Kentang 1'
                        ? 'bg-brand-primary'
                        : item.status === 'Ladang Kentang 2'
                        ? 'bg-brand-yellow'
                        : 'bg-brand-brown'
                    }`}
                  >
                    {item.status}
                  </span>
                </Label>
              </Card>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

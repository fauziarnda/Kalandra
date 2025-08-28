import Image from 'next/image';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="relative hidden bg-brand-primary lg:block overflow-hidden">
        <Image
          src="/images/kalandralogo.svg"
          alt="Kalandra Logo"
          fill
          className="absolute bottom-9 right-0 translate-x-1/3  dark:brightness-[0.2] dark:grayscale"
        />
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="relative flex h-6 w-6 p-0.5 items-center justify-center border border-brand-secondary rounded-md ">
              <Image
                src="/images/kalandralogo.svg"
                alt="Kalandra Logo"
                width={28}
                height={28}
                className="object-contain text-white"
              />
            </div>
            Kalandra
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-[500px] border p-9 rounded-xl">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

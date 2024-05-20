import logo from "../../public/logo/logo.png";
import cover from "../../public/ProjectsCover/image 1.png";
import Link from "next/link";
import Image from "next/image";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-stretch h-screen overflow-hidden">
      <section className="hidden lg:flex w-1/2 grow-0 relative">
        <div className="flex flex-col justify-between h-full">
          <Link href="/" className="absolute top-10 left-10 z-10">
            <div className="flex items-center gap-x-2">
              <Image
                src={logo}
                width={40}
                height={40}
                alt="FLY HIGH"
                priority
              />
              <p className="text-md md:text-xl font-semibold curser-pointer">
                FLY HIGH
              </p>
            </div>
          </Link>
          <Image
            src={cover}
            className="w-full object-cover h-full"
            alt="sign-in"
          />
          <Link href="/" className="absolute bottom-10 left-10 text-sm">
            @flyhigh
          </Link>
        </div>
      </section>
      {children}
    </div>
  );
}

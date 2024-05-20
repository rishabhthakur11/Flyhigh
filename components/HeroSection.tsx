import Image from "next/image";
import heroImage from "../public/assets/heroImage.png";

export default function HeroSection() {
  return (
    <>
      <div>
        <div className="isolate px-6 lg:px-8 z-10 max-w-7xl mx-auto">
          <div className="mx-auto max-w-4xl pt-20 lg:pt-20">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="bg-[#B8F5F9] rounded-full px-16 py-2 text-lg text-black">
                Explore inspiring designs
              </div>
            </div>
            <div className="text-center leading-tight">
              <h1 className="text-5xl md:text-7xl font-medium text-black leading-tight tracking-wider">
                The world&apos;s destination for design
              </h1>
              <p className="mt-5 text-lg leading-8 text-textGray font-semibold mx-auto max-w-3xl">
                Get inspired by the work of millions of top-rated designers &
                agencies around the world.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="bg-black text-white px-8 py-2 rounded-full"
                >
                  Start your journey
                </a>
              </div>
            </div>
          </div>
          <div className="-z-10">
            <Image
              src={heroImage}
              width={650}
              alt="heroImage"
              className="lg:mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import logo from "../../public/logo/logo.png";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className=" px-8 text-white mt-32 bg-black">
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto md:py-20">
        <div className="md:w-1/2">
          <div className="flex items-center gap-x-2">
            <Link href="/">
              <Image
                className="contain-cover"
                alt="lawinzo"
                src={logo}
                width={50}
                priority
              />
            </Link>
            <p className="text-xl font-semibold curser-pointer">FLY HIGH</p>
          </div>
          <div>
            <p className="mt-5 text-[16px] text-white">
              The world&apos;s leading brands use FLY HIGH to hire creative
              talent. Browse millions of top-rated portfolios to find your
              perfect creative match.
            </p>
          </div>
          <div>
            <p className="mt-10 font-semibold text-[16px] text-[#EABF4E]">
              Reach out to us:
            </p>
            <p className="mt-2 text-[14px] text-white font-extralight">
              Get your questions answered about hiring and creating on FLY HIGH
            </p>
          </div>
          <div>
            <p className="mt-10 font-bold text-[16px] text-[#2089EB]">
              2024 @ flyhigh.com
            </p>
          </div>
        </div>
        <div className="md:ml-16 mt-10 md:mt-0">
          <div className="flex gap-10">
            <div>
              <h1 className="font-semibold text-[16px] text-white">Company</h1>
              <div className="mt-2 flex flex-col gap-y-2">
                <a href="#" className="font-extralight text-[14px]">
                  About Us
                </a>
                <a href="#" className="font-extralight text-[14px]">
                  Careers
                </a>
                <a href="#" className="font-extralight text-[14px]">
                  Blogs
                </a>
                <Link href="/privacy" className="font-extralight text-[14px]">
                  Privacy policy
                </Link>
                <Link href="/terms" className="font-extralight text-[14px]">
                  Terms and conditions
                </Link>
              </div>
            </div>

            <div>
              <h1 className="font-semibold text-[16px] text-white">Product</h1>
              <div className="mt-2 flex flex-col gap-y-2">
                <a href="#" className="font-extralight text-[14px]">
                  Creator Hub
                </a>
                <a href="#" className="font-extralight text-[14px]">
                  Design Tool
                </a>
                <a href="#" className="font-extralight text-[14px]">
                  Chat and Collaboration
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

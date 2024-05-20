"use client";
import BrandCarousal from "./BandCarousal";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

interface Props {}

const BannerSection = (props: Props) => {
  return (
    <div className="bg-[#FEDA79]  mt-[50px] py-[80px]">
      <div className="mx-auto flex px-5  md:flex-row flex-col items-center max-w-6xl mx-auto">
        <div className="lg:flex-grow md:w-1/2  md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="xl:text-[40px] text-4xl leading-[62px]  mb-4 font-extralight text-gray-900">
            What are you waiting for{" "}
            <span className="font-bold">Find your next designer today</span>
          </h1>
          <div className="flex lg:flex-row md:flex-col">
            <Link href="/sign-up">
              <Button>Login/Register</Button>
            </Link>
          </div>
          <div>
            <h1 className="mt-8 leading-relaxed lg:text-[20px] lg:font-bold md:leading-[30px]">
              Made with ❤️ in India
            </h1>
            <p className="leading-relaxed text-[14px] lg:font-normal md:leading-[30px]">
              The world&apos;s leading brands use FLY HIGH to hire creative
              talent. Browse millions of top-rated portfolios to find your
              perfect creative match.
            </p>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          {/* crousal */}
          <BrandCarousal />
        </div>
      </div>
    </div>
  );
};

export default BannerSection;

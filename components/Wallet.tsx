import Image from "next/image";
import React from "react";
import stocks from "../public/assets/Design2.png";

export default function Wallet() {
  return (
    <div className="mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col justify-center">
        <h2 className="text-center text-lg font-semibold leading-8 text-textGray tracking-wider">
          FAST IDEA GENERATION
        </h2>
        <div className="mt-10 rounded-full w-12 h-12 bg-[#8AA6E2] flex items-center justify-center text-black font-bold text-xl  mx-auto">
          2
        </div>
        <h2 className="mt-10 text-center text-5xl lg:text-7xl font-bold  leading-12 text-[#8AA6E2] tracking-wider">
          Effortless search and findings
        </h2>
        <p className="mx-auto max-w-2xl mt-6 text-lg leading-6 text-textGray text-center">
          Get inspired by the work of millions of top-rated designers & agencies
          around the world. Collaborate with top designers and agencies around
          the world.
        </p>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="container mx-auto flex px-8 py-24 md:flex-row flex-col  justify-between">
          <div className="md:w-1/2 w-full mb-10 md:mb-0 flex justify-center md:justify-start">
            <Image
              src={stocks}
              width={350}
              height={300}
              alt="Stocks"
              objectFit="contain"
            />
          </div>
          <div className=" md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center md:justify-between">
            <p className="text-4xl md:text-6xl font-medium">
              Get a best creator for you
            </p>
            <div>
              <div>
                <h1 className="text-2xl mb-4 font-semibold text-[#8AA6E2] mt-20">
                  Reasonable creation
                </h1>
                <p className="mb-8 leading-relaxed text-textGray text-md text-justify">
                  You have a choice to select the best creator for you.
                </p>
              </div>
              <div>
                <h1 className="text-2xl mb-4 font-semibold text-[#8AA6E2]">
                  Valuable in market
                </h1>
                <p className="mb-8 leading-relaxed text-textGray text-md text-justify">
                  Our creators are valuable in the market.
                </p>
              </div>
              <div>
                <h1 className="text-2xl mb-4 font-semibold text-[#8AA6E2]">
                  Fast design execution
                </h1>
                <p className="mb-8 leading-relaxed text-textGray text-md text-justify">
                  Get your design executed in a fast and efficient way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

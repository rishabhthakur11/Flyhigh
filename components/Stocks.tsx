import Image from "next/image";
import React from "react";
import design from "../public/assets/Design1.png";

export default function Stocks() {
  return (
    <div className="mt-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col justify-center">
        <h2 className="text-center text-lg font-semibold leading-8 text-textGray tracking-wider">
          EXPLORE THE CREATIVE DESIGNS
        </h2>
        <div className="mt-10 rounded-full w-12 h-12 bg-[#6BB3FD] flex items-center justify-center text-black font-bold text-xl  mx-auto">
          1
        </div>
        <h2 className="mt-10 text-center text-5xl lg:text-7xl font-bold  leading-12 text-themeBlue tracking-wider">
          Treasure of designs
        </h2>
        <p className="mx-auto max-w-2xl mt-6 text-lg leading-6 text-textGray text-center">
          Get inspired by the work of millions of top-rated designers & agencies
          around the world.
        </p>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="container mx-auto flex px-8 py-24 md:flex-row flex-col  justify-between">
          <div className="md:w-1/2 w-full mb-10 md:mb-0 flex justify-center md:justify-start">
            <Image src={design} width={340} height={300} alt="Stocks" />
          </div>
          <div className=" md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center md:justify-between">
            <p className="text-4xl md:text-6xl font-medium">
              Innovative ideas at your finger tips
            </p>
            <div>
              <div>
                <h1 className="text-2xl mb-4 font-semibold text-themeBlue mt-20">
                  Collaborations
                </h1>
                <p className="mb-8 leading-relaxed text-textGray text-md text-justify">
                  Collaborate with top designers and agencies around the world.
                  Get inspired by the work of millions of top-rated designers &
                  agencies around the world.
                </p>
              </div>
              <div>
                <h1 className="text-2xl mb-4 font-semibold text-themeBlue">
                  Idea generation
                </h1>
                <p className="mb-8 leading-relaxed text-textGray text-md text-justify">
                  Get inspired by the work of millions of top-rated designers &
                  agencies around the world. Collaborate with top designers and
                  agencies around the world.
                </p>
              </div>
              <div>
                <h1 className="text-2xl mb-4 font-semibold text-themeBlue">
                  Educative material
                </h1>
                <p className="mb-8 leading-relaxed text-textGray text-md text-justify">
                  Fly High gives the best educative material to help you grow in
                  your career as a designer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

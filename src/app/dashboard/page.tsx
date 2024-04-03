import Image from "next/image";
import React from "react";
import dashboard from "../../../public/assets/dashboard.png";
import Navbar from "@/components/Navbar";

type Props = {};

function page({}: Props) {
  return (
    <div className={`flex flex-col max-w-6xl mx-auto`}>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen bg-white">
        <Image
          src={dashboard}
          width={550}
          height={350}
          alt="heroImage"
          priority
        />
        <h1 className="text-4xl font-bold mb-4 animate-fade-in-down ">
          Coming Soon
        </h1>
        <p className="text-lg text-textGray mb-8 animate-fade-in-up">
          We &apos; re working hard to bring you an amazing experience.
        </p>
        <div className="flex animate-fade-in">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border border-textGray rounded-l-md focus:outline-none focus:ring-2 focus:ring-textBlue text-black"
          />
          <button
            type="button"
            className="px-4 py-2 bg-black text-white font-semibold rounded-r-md "
          >
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;

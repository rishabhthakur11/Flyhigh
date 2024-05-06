import Image from "next/image";
import React from "react";
import dashboard from "../../../public/assets/dashboard.png";
import Categories from "@/components/Categories";

type Props = {};

function page({}: Props) {
  return (
    <section className="flexStart flex-col paddings">
      <Categories />
      <div className="flex flex-col items-center justify-center">
        <Image
          src={dashboard}
          width={550}
          height={350}
          alt="heroImage"
          priority
        />
        <p className="no-result-text text-center">
          No projects found, go create some first.
        </p>
      </div>
    </section>
  );
}

export default page;

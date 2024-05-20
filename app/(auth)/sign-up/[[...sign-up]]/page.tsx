import { Metadata } from "next";
import { SignUp } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Sign Up | Flyhigh",
  description:
    "Create an account on Flyhigh, the world’s leading community for designers to share, grow, and get hired.",
};

export default function SignUpPage() {
  return (
    <>
      <section className="flex flex-col flex-1 overflow-auto justify-center w-full">
        <main className="flex justify-center xl:justify-start grow items-center w-full h-full">
          <div className="xl:ml-28">
            <SignUp />
          </div>
        </main>
      </section>
    </>
  );
}

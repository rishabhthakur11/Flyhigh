"use client";
import Link from "next/link";
import React, { Suspense } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import logo from "../../public/logo/logo.png";
import { SearchInput } from "./SearchInput";
import { SignInButton, useAuth } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

type Props = {};

function Navbar({}: Props) {
  const { isSignedIn } = useAuth();
  return (
    <div className="flex py-5 items-center px-5 navbar">
      {/* leftSide */}
      <div className="flex gap-x-24 text-black  items-center grow">
        <Link href="/">
          <div className="flex items-center gap-x-2">
            <Image src={logo} width={30} height={50} alt="FLY HIGH" priority />
            <p className="text-md md:text-xl font-semibold curser-pointer">
              FLY HIGH
            </p>
          </div>
        </Link>
        <div className="flex gap-x-12 text-lg font-normal hidden lg:flex">
          <Suspense>
            <SearchInput />
          </Suspense>
        </div>
      </div>

      <div>
        <div className="flex gap-x-7 text-lg text-black font-normal items-center">
          {isSignedIn ? (
            <>
              <Link href="/create-project">
                <Button size="sm">
                  <p>Create Project</p>
                </Button>
              </Link>
              <UserButton afterSignOutUrl="/" />
            </>
          ) : (
            <SignInButton afterSignInUrl="/dashboard">
              <Button>
                <p>Login/Register</p>
              </Button>
            </SignInButton>
          )}
        </div>
        {/* TODO: Add the side bar here */}
        {/* <div className="lg:hidden text-black relative">
          <div className="z-50">
            {sideBarIcon ? (
              <MenuIcon onClick={manageSideBar} />
            ) : (
              <CloseIcon onClick={manageSideBar} />
            )}
          </div>
          {sideBar ? (
            <div className="bg-white fixed top-0 left-0 w-3/4 md:w-1/2 h-screen  lg:hidden z-50">
              <SideBar />
            </div>
          ) : null}
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;

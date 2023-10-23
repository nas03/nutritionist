"use client";
import Link from "next/link";
import Image from "next/image";

import { signOut, useSession } from "next-auth/react";
import { sign } from "jsonwebtoken";

export default function NavigationBar() {
  const { data: session } = useSession();

  return (
    <>
      <ul className="max-h-15 flex w-full flex-row items-center gap-10 bg-green-500">
        <li className="pb-5 pr-10 pt-5 text-xl text-white hover:bg-slate-500">
          <Image
            src="/icon.svg"
            alt="icon"
            width={32}
            height={32}
            className="mr-2 inline"
          ></Image>
          Obesity Controller
        </li>
        <li className="pb-5  pt-5 text-xl text-white hover:bg-slate-500  ">
          Home
        </li>
        <li className="pb-5  pt-5 text-xl text-white hover:bg-slate-500">
          Meals
        </li>
        <li className="pb-5  pt-5 text-xl text-white hover:bg-slate-500">
          Question
        </li>
        {!session ? (
          <li className="ml-auto mr-10 pb-5 pt-5 text-xl text-white hover:bg-slate-500">
            <Link href="/" >Sign in</Link>
          </li>
        ) : (
          <li className="ml-auto mr-10 pb-5 pt-5 text-xl text-white hover:bg-slate-500">
            <button onClick={() => {
              signOut();
              console.log("Sign out", session)
              }}>Sign out</button>
          </li>
        )}
      </ul>
    </>
  );
}

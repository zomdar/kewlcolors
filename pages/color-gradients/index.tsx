import Link from "next/link";
import * as React from "react";
import NavBar from "../components/common/NavBar";
import Head from "next/head";
import { TrendingUpIcon, CodeIcon } from "@heroicons/react/solid";

export default function Landing() {
  return (
    <>
      <Head>
        <title>Hi, I'm Wooj</title>
        <meta
          name="description"
          content="I like long walks on the beach and my favourite Pokemon is Charizard."
        />
      </Head>
      <div className="mx-auto pt-6 flex flex-col px-3 bg-gradient-to-r from-black to-purple-500 text-white">
        <NavBar />

        <div
          className="container mx-auto px-4 flex justify-between flex-wrap"
          style={{ paddingTop: "60px", paddingBottom: "100px" }}
        >
          <div className="flex flex-col md:w-2/5">
            <h1 className="text-6xl pb-6 font-bold">Color Gradients</h1>
            <div className="flex flex-row">
              <div className="flex flex-row">
                <TrendingUpIcon className="h-5 w-5 text-gray-500" />
                <p className="pl-2 text-gray-200">10 Color Gradients</p>
              </div>
              <div className="flex flex-row pl-4">
                <CodeIcon className="h-5 w-5 text-gray-500" />
                <p className="pl-2 text-gray-200">CSS Code</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 pt-16">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora harum
          in esse laborum voluptate totam eaque qui adipisci fugiat, nostrum
          commodi eum nihil odit, quos quibusdam. Culpa facilis nobis ad?
        </p>
      </div>
    </>
  );
}

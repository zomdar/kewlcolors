import Link from "next/link";
import * as React from "react";
import NavBar from "../components/common/NavBar";
import Head from "next/head";
import { TrendingUpIcon, CodeIcon } from "@heroicons/react/solid";
import FontPairing, {
  FontPairingLayout,
} from "../components/common/FontPairingsLayout";

const someFontPairings = [
  { primary: "IMB Plex Sans", secondary: "Inter" },
  { primary: "Roboto Condensed", secondary: "Cabin Regular" },
  { primary: "Roboto", secondary: "Lora" },
  { primary: "Montserrat", secondary: "Hind Siliguri" },
];

export default function Landing() {
  return (
    <>
      <Head>
        <title>Font Pairings</title>
        <meta name="description" content="Font Pairings" />
      </Head>
      <div className="mx-auto pt-6 flex flex-col px-3 bg-gradient-to-r from-black to-purple-500 text-white">
        <NavBar />

        <div
          className="container mx-auto px-4 flex justify-between flex-wrap"
          style={{ paddingTop: "60px", paddingBottom: "100px" }}
        >
          <div className="flex flex-col md:w-2/5">
            <h1 className="text-6xl pb-6 font-bold">Font Pairings</h1>
            <div className="flex flex-row">
              <div className="flex flex-row">
                <TrendingUpIcon className="h-5 w-5 text-gray-500" />
                <p className="pl-2 text-gray-200">5 Font Pairings</p>
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
        <p className="text-xl pb-24">Font Pairing</p>
        {someFontPairings.map((filteredPalette: FontPairingLayout) => (
          <FontPairing
            pairing={filteredPalette}
            key={filteredPalette.primary}
          ></FontPairing>
        ))}
      </div>
    </>
  );
}

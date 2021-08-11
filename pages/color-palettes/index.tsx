import Link from "next/link";
import * as React from "react";
import NavBar from "../components/common/NavBar";
import Head from "next/head";
import { TrendingUpIcon, CodeIcon } from "@heroicons/react/solid";
import ColorPalette, {
  ColorPaletteLayout,
} from "../components/common/ColorPaletteLayout";

const someColorPalettes: ColorPaletteLayout[] = [
  {
    type: "cold palette",
    level: "001",
    colorCode: ["#283044", "#78A1BB", "#EBF5EE", "#BFA89E", "#8B786D"],
  },
  {
    type: "cold palette",
    level: "002",
    colorCode: ["#82D4BB", "#82C09A", "#82AC9F", "#829298", "#94778B"],
  },
  {
    type: "cold palette",
    level: "003",
    colorCode: ["#DABFFF", "#907AD6", "#4F518C", "#2C2A4A", "#7FDEFF"],
  },
  {
    type: "cold palette",
    level: "004",
    colorCode: ["#274060", "#335C81", "#65AFFF", "#1B2845", "#5899E2"],
  },
  {
    type: "warm palette",
    level: "001",
    colorCode: ["#4F000B", "#720026", "#CE4257", "#FF7F51", "#FF9B54"],
  },
  {
    type: "warm palette",
    level: "002",
    colorCode: ["#DDE8B9", "#E8D2AE", "#D7B29D", "#CB8589", "#796465"],
  },
  {
    type: "warm palette",
    level: "003",
    colorCode: ["#F08080", "#F4978E", "#F8AD9D", "#FBC4AB", "#FFDAB9"],
  },
  {
    type: "warm palette",
    level: "004",
    colorCode: ["#8E9AAF", "#CBC0D3", "#EFD3D7", "#FEEAFA", "#DEE2FF"],
  },
];

export default function Landing() {
  return (
    <>
      <Head>
        <title>Color Palettes</title>
        <meta name="description" content="Color Palettes" />
      </Head>
      <div className="mx-auto pt-6 flex flex-col px-3 bg-gradient-to-r from-black to-purple-500 text-white">
        <NavBar />

        <div
          className="container mx-auto px-4 flex justify-between flex-wrap"
          style={{ paddingTop: "60px", paddingBottom: "100px" }}
        >
          <div className="flex flex-col md:w-2/5">
            <h1 className="text-6xl pb-6 font-bold">Color Palettes</h1>
            <div className="flex flex-row">
              <div className="flex flex-row">
                <TrendingUpIcon className="h-5 w-5 text-gray-500" />
                <p className="pl-2 text-gray-200">8 Color Palettes</p>
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
        <p className="text-xl pb-24">Cold Color Palettes</p>
        {someColorPalettes
          .filter((somePalette) => somePalette.type === "cold palette")
          .map((filteredPalette: ColorPaletteLayout) => (
            <ColorPalette
              palette={filteredPalette}
              key={filteredPalette.colorCode[0]}
            ></ColorPalette>
          ))}
        <p className="text-xl py-24">Warm Color Palettes</p>
        {someColorPalettes
          .filter((somePalette) => somePalette.type === "warm palette")
          .map((filteredPalette: ColorPaletteLayout) => (
            <ColorPalette
              palette={filteredPalette}
              key={filteredPalette.colorCode[0]}
            ></ColorPalette>
          ))}
      </div>
    </>
  );
}

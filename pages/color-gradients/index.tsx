import * as React from "react";
import NavBar from "../components/common/NavBar";
import Head from "next/head";
import { TrendingUpIcon, CodeIcon } from "@heroicons/react/solid";
import Gradient, { GradientLayout } from "../components/common/GradientLayout";

const someGradients: GradientLayout[] = [
  {
    type: "Cold Gradient",
    level: "001",
    startColor: "##F9A8D4",
    endColor: "#A78BFA",
    startColorClass:
      "py-8 px-24 rounded bg-gradient-to-r from-pink-300 to-purple-400 hover:from-pink-400 hover:to-purple-400 lg:px-48",
  },
  {
    type: "Cold Gradient",
    level: "002",
    startColor: "#6EE7B7",
    endColor: "#7C3AED",
    startColorClass:
      "py-8 px-24 rounded bg-gradient-to-r from-green-300 to-purple-600 hover:from-green-400 hover:to-purple-700 lg:px-48",
  },
  {
    type: "Cold Gradient",
    level: "003",
    startColor: "#EF4444",
    endColor: "#DB2777",
    startColorClass:
      "py-8 px-24 rounded bg-gradient-to-r from-red-500 to-pink-600 hover:from-pink-600 hover:to-yellow-600 lg:px-48",
  },
  {
    type: "Cold Gradient",
    level: "004",
    startColor: "#EC4895",
    endColor: "#F59B0D",
    startColorClass:
      "py-8 px-24 rounded bg-gradient-to-r from-pink-100 to-blue-300 hover:from-pink-200 hover:to-blue-400 lg:px-48",
  },
  {
    type: "Cold Gradient",
    level: "005",
    startColor: "#EC4895",
    endColor: "#F59B0D",
    startColorClass:
      "py-8 px-24 rounded bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 lg:px-48",
  },
  {
    type: "Warm Gradient",
    level: "001",
    startColor: "##EC4895",
    endColor: "#F59B0D",
    startColorClass:
      "py-8 px-24 rounded bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 lg:px-48",
  },
  {
    type: "Warm Gradient",
    level: "002",
    startColor: "#C126D0",
    endColor: "#DB2778",
    startColorClass:
      "py-8 px-24 rounded bg-gradient-to-r from-pink-500 to-purple-800 hover:from-pink-600 hover:to-purple-900 lg:px-48",
  },
  {
    type: "Warm Gradient",
    level: "003",
    startColor: "#EC4895",
    endColor: "#F59B0D",
    startColorClass:
      "py-8 px-24 rounded bg-gradient-to-r from-yellow-100 to-blue-400 hover:from-yellow-200 hover:to-blue-500 lg:px-48",
  },
  {
    type: "Warm Gradient",
    level: "004",
    startColor: "#EC4895",
    endColor: "#A78BFA",
    startColorClass:
      "py-8 px-24 rounded bg-gradient-to-r from-purple-100 to-purple-400 hover:from-purple-200 hover:to-purple-500 lg:px-48",
  },
  {
    type: "Warm Gradient",
    level: "005",
    startColor: "#EC4895",
    endColor: "#F59B0D",
    startColorClass:
      "py-8 px-24 rounded bg-gradient-to-r from-red-100 to-red-400 hover:from-red-200 hover:to-red-500 lg:px-48",
  },
];

export default function Landing() {
  return (
    <>
      <Head>
        <title>Kewl Colors</title>
        <meta
          name="description"
          content="Kewl Colors for your next project!"
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
        <div className="flex flex-row flex-wrap">
          <div className="flex flex-col flex-1">
            <p className="text-xl pb-24">Warm Gradient Gradients</p>
            {someGradients
              .filter((someGradient) => someGradient.type === "Warm Gradient")
              .map((filteredGradient: GradientLayout) => (
                <Gradient
                  gradient={filteredGradient}
                  key={filteredGradient.startColorClass}
                ></Gradient>
              ))}
          </div>
          <div className="flex flex-col flex-1">
            <p className="text-xl pb-24">Cold Gradient Gradients</p>
            {someGradients
              .filter((someGradient) => someGradient.type === "Cold Gradient")
              .map((filteredGradient: GradientLayout) => (
                <Gradient gradient={filteredGradient}></Gradient>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

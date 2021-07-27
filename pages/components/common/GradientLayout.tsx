import { spawn } from "child_process";
import React, { useState } from "react";

export interface GradientLayout {
  type: string;
  level: string;
  startColor: string;
  endColor: string;
  startColorClass: string;
}

const Gradient = (props: { gradient: GradientLayout }) => {
  const [colors, setColors] = useState(0);
  const [copied, setCopied] = useState(false);

  const { gradient } = props;

  return (
    <div className="flex flex-row pb-16">
      <div className="flex flex-col">
        <p className="text-2xl">{gradient.type}</p>
        <p className="text-md pt-4">{gradient.level}</p>
      </div>
      <div className="flex flex-col pl-8">
        <button
          type="button"
          className={gradient.startColorClass}
          onClick={() => {
            setCopied(true);
            setTimeout(function () {
              setCopied(false);
            }, 1000)
            navigator.clipboard.writeText(
              gradient.startColor + "-" + gradient.endColor
            );
          }}
        ></button>
        <p className="text-md text-gray-400 pt-2">
          {gradient.startColor} - {gradient.endColor}
        </p>
        {copied ? <p className="text-xs text-red-500 animate-pulse">Copied!</p> : ""}
      </div>
    </div>
  );
};

const Gradients = (props: { gradients: GradientLayout[] }) => {
  const { gradients } = props;

  if (!gradients) {
    return null;
  }

  return (
    <div className="flex flex-col">
      {gradients.map((gradient: GradientLayout) => (
        <Gradient key={gradient.startColor} gradient={gradient} />
      ))}
    </div>
  );
};

export default Gradient;

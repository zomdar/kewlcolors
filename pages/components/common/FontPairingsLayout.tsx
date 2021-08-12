import React, { useState } from "react";

export interface FontPairingLayout {
  primary: string;
  secondary: string;
}

const FontPairing = (props: { pairing: FontPairingLayout }) => {
  const [copied, setCopied] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");

  const { pairing } = props;

  if (!pairing) {
    return null;
  }

  return (
    <div className="flex flex-row flex-wrap lg:flex-nowrap pb-16">
      <div className="flex flex-col" style={{ minWidth: "16rem" }}>
        <a target="_blank" href="" className="text-l underline">
          {pairing.primary.toLocaleUpperCase()}
        </a>
        <a target="_blank" href="" className="text-md pt-4 underline">
          {pairing.secondary}
        </a>
      </div>
      <div className="flex flex-wrap lg:pl-12">
        <div className="p-8 rounded shadow-lg">
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold">
              Medium length display headline.
            </h2>
            <p className="pt-4">
              An exposed concrete frame supports this 4.2-metre-wide skinny
              house in Melbourne designed by Oliver du Puy Architects to feature
              meditation spaces. Aptly named Skinny House, the project carves
              out a quiet, contemplative space on the site of a neglected yard
              of a 19th-century shop. Oliver du Puy Architects, which is based
              in Melbourne, built it as a home for a London-based client who is
              a keen meditator who frequently travels to and from Australia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FontPairing;

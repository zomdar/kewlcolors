import React, { useState } from "react";

export interface ColorPaletteLayout {
  type: string;
  level: string;
  colorCode: string[];
}

const ColorPalette = (props: { palette: ColorPaletteLayout }) => {
  const [copied, setCopied] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');

  const { palette } = props;

  if (!palette) {
    return null;
  }

  return (
    <div className="flex flex-row pb-16">
      <div className="flex flex-col">
        <p className="text-l">{palette.type.toLocaleUpperCase()}</p>
        <p className="text-md pt-4">{palette.level}</p>
      </div>
      <div className="flex flex-wrap pl-12">
        {palette.colorCode.map((color) => (
          <div className="flex flex-col px-2" key={color}>
            <button
              type="button"
              className="py-8 px-24 rounded"
              style={{ backgroundColor: color }}
              onClick={() => {
                setCopied(true);
                setSelectedColor(color);
                setTimeout(function () {
                  setCopied(false);
                }, 1000);
                navigator.clipboard.writeText(color);
              }}
            ></button>
            <p className="text-md text-gray-400 pt-2">{color}</p>
            {(copied && color == selectedColor)  ? (
              <p className="text-xs text-red-500 animate-pulse">Copied!</p>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;

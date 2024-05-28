"use client";

import {
  UnifrakturMaguntia,
  Coming_Soon,
  Yarndings_12,
  Libre_Barcode_39_Extended_Text,
  Jacquard_12_Charted,
  Pixelify_Sans,
} from "next/font/google";
import { useState, useEffect } from "react";

const unifraktur = UnifrakturMaguntia({ subsets: ["latin"], weight: ["400"], display: 'swap', adjustFontFallback: false });
const comingSoon = Coming_Soon({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  adjustFontFallback: false,
});

const libreBarcode = Libre_Barcode_39_Extended_Text({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  adjustFontFallback: false,
});

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  adjustFontFallback: false,
});

export const fonts = [
  unifraktur,
  comingSoon,
  libreBarcode,
  pixelify,
];

export default function Title() {
  const [currentFontIndex, setCurrentFontIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentFontIndex(
        (currentFontIndex) => (currentFontIndex + 1) % fonts.length
      );
    }, 800);

    return () => clearInterval(intervalId);
  }, []);

  const currentFont = fonts[currentFontIndex].className;

  return (
    <div className="flex flex-col items-center m-32  text-6xl sm:text-8xl mt-20 ">
      <p className={currentFont}>PsyCode</p>
    </div>
  );
}

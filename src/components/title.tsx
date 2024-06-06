"use client";

import {
  UnifrakturMaguntia,
  Coming_Soon,
  Libre_Barcode_39_Extended_Text,
  Pixelify_Sans,
} from "next/font/google";
import Link from "next/link";
import { useState, useEffect } from "react";

const unifraktur = UnifrakturMaguntia({ subsets: ["latin"], weight: ["400"], display: 'swap', adjustFontFallback: false });

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
  unifraktur.className,
  libreBarcode.className,
  pixelify.className,
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

  const currentFont = fonts[currentFontIndex];

  return (
    <div className="flex flex-col items-center m-5 mb:mb-20 text-white text-6xl sm:text-8xl ">
      <Link href='/'><p className={currentFont}>PsyCode</p></Link>
    </div>
  );
}

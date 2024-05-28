'use client'

import { NextFont } from "next/dist/compiled/@next/font";
import { useEffect, useState } from "react";

export default function Title({fonts} : {fonts : NextFont[]}) {

    const [currentFontIndex, setCurrentFontIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentFontIndex((currentFontIndex) => (currentFontIndex + 1) % fonts.length);
        }, 800); 
    
        return () => clearInterval(intervalId);
      }, [fonts.length]);

      const currentFont = fonts[currentFontIndex].className;

  return (
    <div className="flex flex-col items-center m-32  text-6xl sm:text-8xl mt-20 ">
        <p className={currentFont}>
          PsyCode
        </p>

    </div>
  );
}

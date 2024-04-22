'use client'

import { useEffect } from "react";

import { lineSpinner } from "ldrs";

export default function LoadingAnimation() {
    useEffect(() => {
        lineSpinner.register();
      });
  return (
    <div className="flex justify-center items-center w-full h-full">
      <l-line-spinner
        size="40"
        stroke="3"
        speed="1"
        color="black"
      ></l-line-spinner>
    </div>
  );
}

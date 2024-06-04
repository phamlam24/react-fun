"use client";

import Image from "next/image";
import Button from "@/components/Button";
import { useState } from "react";

const numberOfImages = 5;

export default function NumberList() {
  const [number, setNumber] = useState(1);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setNumber((number % numberOfImages) + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  return (
    <div className="flex flex-col items-center">
      <Button onClick={handleNextClick}>
        {number === numberOfImages ? "Reset" : "Next"}
      </Button>
      <Image
        src={"/number_" + number + ".png"}
        alt={"Number " + number}
        width={100}
        height={100}
        className="border border-white"
      />
      <Button onClick={handleMoreClick}>{showMore ? "Less" : "More"}</Button>

      {showMore && <p>This is the number {number}</p>}
    </div>
  );
}

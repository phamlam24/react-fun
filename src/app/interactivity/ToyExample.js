"use client"

import Button from "@/components/Button";
import { useState } from "react";

export default function SeriesUpdateCounter() {
  const [number, setNumber] = useState(0);

  return (
    <div className="flex flex-row items-center [&>*]:mx-2">
      <p>{number}</p>
      <Button
        onClick={() => {
          setNumber((n) => n + 1);
          setNumber((n) => n + 1);
          setNumber((n) => n + 1);
        }}
      >
        +3
      </Button>
      <Button
        onClick={() => {
          setNumber((n) => 0);
        }}
      >
        Reset
      </Button>
    </div>
  );
}

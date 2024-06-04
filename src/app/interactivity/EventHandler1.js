"use client";

import Button from "@/components/Button";
// Quick reminder about functions in JS:
// 1. Functions can be defined as function X() -> function X
// or can be defined (and passed normally) as a variable:
// let add = function(x, y)...
// we can use add as a variable now,
// in this code, onClick, onPlayMovie, and onUploadImage are event handler props. These props are basicly functions.



export function Toolbar({ onPlayMovie, onUploadImage }) {
  return (
    <>
      <Button onClick={onPlayMovie}>Play Movie</Button>
      <Button onClick={onUploadImage}>Upload Image</Button>
    </>
  );
}

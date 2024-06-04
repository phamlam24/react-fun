"use client";

import Image from "next/image";
import Link from "next/link";

import { Title, Heading1 } from "@/components/TextFormat";
import Head from "next/head";

import { Toolbar } from "./EventHandler1";
import NumberList from "./NumberList";
import TutorialPage from "../TutorialPage";

export default function Page() {
  return (
    <TutorialPage
      title={"Adding Interactivity with States"}
      pageName="interactivity"
    >
      <Heading1>Event Handler Props</Heading1>

      <Toolbar
        onPlayMovie={() => alert("Playing Movie")}
        onUploadImage={() => alert("Uploading image")}
      />

      <p>
        <i>Event handlers</i> are simple, treat it like onClick functions of
        sorts. Most interactions happen the same.
      </p>

      <Heading1>State: A Component&apos;s Memory</Heading1>

      <NumberList />
      <i>check NumberList.js</i>

      <p>
        So there is a thing like this - you want to add interactivity by using
        variables - and you want to re-render components each time the variable
        is changed.
      </p>

      <p>
        Unfortunately, local variables are re-initialized each render, and
        changes to them does not create a re-rendering.
      </p>

      <p>
        That&apos;s where <i>states</i> come into play. States retain data
        between renders, and trigger a re-render every time it is updated. React
        does so by making you use the useState() <i>hook</i> - creating a pair
        of state variable and state setter function.
      </p>

      <p>
        A hook is just a special function. It just means that you are{" "}
        <i>hooking</i> into different features of React.
      </p>

      <p>
        You can use more than one state per component. States in different
        components are independent from each other and private.
      </p>
    </TutorialPage>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";

import { Heading1 } from "@/components/TextFormat";

import { Toolbar } from "./Toolbar";
import NumberList from "./NumberList";
import TutorialPage from "../TutorialPage";
import SeriesUpdateCounter from "./ToyExample";

export default function Page() {
  return (
    <TutorialPage
      title={"Adding Interactivity with States"}
      pageName="interactivity"
      showBottomNavbar={true}
    >
      <Heading1>Event Handler Props</Heading1>

      <Toolbar
        onPlayMovie={() => alert("Playing Movie")}
        onUploadImage={() => alert("Uploading image")}
      />
      <i>check Toolbar.js</i>

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

      <p>
        Remember to only use hooks at the top level of your components - no
        hooks in conditions, loops, nests,...
      </p>

      <Heading1>Details about Rendering and States</Heading1>

      <p>
        React is a rendering tool. The rendering process of React have 3 steps:{" "}
      </p>

      <ul>
        <li>
          1. A render is triggered. This could be an <i>initial render</i> or a
          re-render is triggered by updating a state
        </li>
        <li>
          2. React render the components. On the initial render, React render
          the <i>root</i> component, recursively down the tree if a component
          returns some other component. On a re-render, only the component that
          have their state changed is re-rendered. Remember that the rendering
          process must be a <b>pure calculation</b>, which means that same
          input, same output, no side effects. This can be somewhat tested using
          Strict Mode.
        </li>
        <li>
          3. React modify the DOM. React does not change the DOM nodes if there
          is no difference between renders.
        </li>
      </ul>

      <p>
        States behave more like a snapshot than a variable. Setting a state does
        not change the state variable, but triggers a re-render with the new
        state value.
      </p>

      <p>
        Which means, for example, if you have a variable <code>counter</code>,
        calling <code>setCounter(counter + 1)</code> three times does not change
        it to <code>counter + 3</code>, but render three times, each time using
        the original <code>counter</code> variable. In the end, only the last
        render is visible, and the result is <code>counter + 1</code>.
      </p>

      <p>
        However, React <i>batches</i> state updates - you can pass a function to
        setState function that changes the value of the state.
      </p>

      <SeriesUpdateCounter />

      <p>In this example, I used 3 setState() functions to update the variable.</p>

      <p>As a rule of thumb, treat states as read-only, updating it only using the useState() hook provided.</p>
    </TutorialPage>
  );
}

import Image from "next/image";
import Gallery from "./Gallery";
import Profile from "./Profile";
import ProfileProps from "./ProfileProps";
import { Title, Heading1 } from "@/components/TextFormat";

export default function Page() {
  var curly_showcase = "Just wrap the variable names around curly braces";

  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-24 [&>*]:m-4">
        {/* weird class adjust all margins for child inside div */}
        <Title>Basics of UI design in React - Components</Title>

        <p>
          <i>Components</i> are one of the core concepts of React.
        </p>

        <Profile></Profile>
        <Profile></Profile>

        <p>
          The images above are 2 Profile components. You can reuse this
          component any time in the future by using the Profile tag.
        </p>

        <p>
          You can import a Component from any file. In the next case, I import
          the Gallery component from Gallery.js, which import Profile from
          Profile.js:
        </p>
        <Gallery></Gallery>

        <Heading1>Smooth HTML inside JS - JSX</Heading1>

        <p>
          These HTML inside JS things are weird, they use <i>JSX</i>. React use
          JSX a lot to render HTML and work with logic at the same time.
        </p>

        <b>Rules of JSX:</b>

        <p>
          1. Return 1 root element - JSX tags are just JS components. If you
          want to return multiple elements, use a <i>Fragment</i> - like how
          I&apos;m doing in this function
        </p>

        <p>2. Close all tags - If you write good HTML you already done this</p>

        <p>
          3. Use camelCase - JSX attribute become keys of JS objects. Since{" "}
          <i>class</i> is a reserved keyword in JS, we use <i>className</i>
        </p>

        <p>
          Curly braces - escape HTML into JS. For example, if we want to display
          12 + 23 = {12 + 23}, or display the value of a variable:{" "}
          {curly_showcase}
        </p>

        <p
          style={{
            color: "pink",
          }}
        >
          Double curly braces are simply just objects. An example is CSS inline
          styling displayed in this text
        </p>

        <Heading1>
          Passing data into components using <i>Props:</i>
        </Heading1>

        <p>
          Props are information to pass to a JSX tag. For example, <i>img</i>{" "}
          can contain className, src, alt, width,...
        </p>

        <p>
          Props can also have default values. You can also have JSX as props
          (look at layout.js).
        </p>
        <div className="flex flex-row [&>*]:m-4">
          <ProfileProps
            person={{
              fileName: "/katsuko_saruhashi.jpg",
              name: "Katsuko Saruhashi",
            }}
            size={120}
          />
          <ProfileProps
            person={{
              fileName: "/lin_lanying.jpg",
              name: "Lin Lanying",
            }}
          />
        </div>

        <p>
          (css acting weirdly again, i am confident that width and height should
          be set up correctly in props, just inspect elements)
        </p>

        <p>
          A special prop called <i>children</i> will take any content inside a
          component tag.
        </p>

        <p>
          Props are read-only snapshots - every render recieves a new version of
          props.
        </p>

        <p>
          Props are <b>immutable</b> - if you want the props to change, you have
          to do <i>something else...</i>
        </p>

        <Heading1>
          More rendering stuff - list and conditional rendering
        </Heading1>

        <p>
          These are more about <i>React official way </i>of doing these, you
          could figure out yourself if you want.
        </p>

        <p>
          
        </p>

        <h2 className=""></h2>
      </main>
    </>
  );
}

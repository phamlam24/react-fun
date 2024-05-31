import Image from "next/image";
import Profile from "./Profile";

// Export default is only used 
export default function Gallery() {
  return (
    <section className="flex flex-col items-center">
      <h1>Gallery of Images</h1>
      <div className="[&>*]:m-4 flex flex-row">
        <Profile />
        <Profile />
        <Profile />
      </div>
    </section>
  );
}

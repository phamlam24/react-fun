import Image from "next/image";

function Avatar() {
  return (
    <Image
      className="avatar"
      src="/lin_lanying.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
    />
  );
}

export default function Profile() {
  return <Avatar />;
}

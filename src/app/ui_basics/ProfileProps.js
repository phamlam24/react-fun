import Image from "next/image";
function Avatar({ person, size=100}) {
  // React component function only accept 1 variable: the props variable! 
  // You have to have the {} for destructuring
  return (
    <Image
      className="avatar"
      src={person.fileName}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function ProfileProps(props) {
  // You can also define it like this.
  return (
    <>
      <Avatar
        person={props.person}
        size={props.size}
      />
    </>
  );
}

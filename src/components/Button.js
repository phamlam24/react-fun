export default function Button({ onClick, children }) {
  return <button onClick={onClick} className="border px-2 py-1 rounded-md hover:animate-pulse">{children}</button>;
}

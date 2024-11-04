import Paths from "@/components/Paths";

export default function page({ children }) {
  return (
    <div>
      <Paths />
      {children}
    </div>
  );
}

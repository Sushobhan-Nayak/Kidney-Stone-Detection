import Image from "next/image";
import KidneyDetection from "./detect";

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <KidneyDetection />
    </div>
  );
}

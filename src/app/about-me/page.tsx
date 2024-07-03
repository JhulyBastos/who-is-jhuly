import { Card } from "@/components/Card";
import { informations } from "@/data/informations";

export default function AboutME() {
  return (
    <div className="w-full h-screen bg-dark-10 grid grid-cols-3 p-10">
      {informations.map((information) => (
        <Card information={information} />
      ))}
    </div>
  );
}

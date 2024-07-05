import { Card } from "@/components/Card";
import { informations } from "@/data/informations";

export default function AboutMe() {
  return (
    <div className="w-full h-screen overflow-y-scroll bg-dark-10 grid grid-cols-1 lg:grid-cols-2 p-10">
      {informations.map((information) => (
        <Card information={information} key={information.id} />
      ))}
    </div>
  );
}

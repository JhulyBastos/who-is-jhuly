import { Information } from "@/types/Information";
import { ButtonAboutMe } from "../Button";

interface CardProps {
  information: Information;
}

export function Card({ information }: CardProps) {
  return (
    <div className=" flex flex-col justify-center items-center">
      <p className="flex justify-center py-2 text-lg">{information.titulo}</p>
      <img
        className=" w-full max-w-[300px] h-[436px] rounded-lg border-dark-30 border-4 p-4"
        src={information.imagem}
        alt=""
      />

      <div className=" py-5">
        <ButtonAboutMe>Escolher</ButtonAboutMe>
      </div>
    </div>
  );
}

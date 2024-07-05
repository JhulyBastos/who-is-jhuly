"use client";
import { Information } from "@/types/Information";
import { ButtonAboutMe } from "../Button";
import { useRouter } from "next/navigation";
import { informations } from "@/data/informations";

interface CardProps {
  information: Information;
}

export function Card({ information }: CardProps) {
  const router = useRouter();
  return (
    <div className=" flex flex-col justify-center items-center text-center">
      <p className="flex justify-center py-2 text-lg">{information.titulo}</p>
      <img
        className=" w-full max-w-[300px] h-[436px] rounded-lg border-dark-30 border-4 p-4"
        src={information.imagem}
        alt=""
      />

      <div className=" py-5">
        <ButtonAboutMe onClick={() => router.push(`${information.id}`)}>
          Escolher
        </ButtonAboutMe>
      </div>
    </div>
  );
}

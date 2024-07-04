"use client";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="w-full h-screen bg-dark-10">
      <div>
        <div className="flex justify-center py-10">
          <img
            className="w-[314px] h-[324px] rounded-full border-x-8 border-dark-30 p-2 hover:scale-105 duration-300"
            src="/assets/imagens/perfil.jpg"
            alt="Imagem de perfil"
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-lg">Olá, meu nome é</p>
          <h1 className="text-5xl">Jhuly Bastos</h1>
          <p className="text-lg text-center">
            Tenho 22 anos e sou de Belo Horizonte Minas Gerais
          </p>
          <div className="py-6">
            <Button onClick={() => router.push("/about-me")}>Saber mais</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

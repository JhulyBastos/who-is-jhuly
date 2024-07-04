export default function PersonalTastes() {
  return (
    <div className="h-screen w-full bg-background bg-cover bg-center  ">
      <div className="flex justify-center items-center w-full">
        <div className="flex justify-center py-4 mb-4">
          <img
            className="w-[314px] h-[324px] rounded-full border-x-[10px] border-dark-10 p-2 hover:scale-105 duration-300"
            src="/assets/imagens/perfil.jpg"
            alt="Imagem de perfil"
          />
        </div>
      </div>
      <div className=" flex flex-col px-28 gap-14 ">
        <div className="">
          <h1 className="text-3xl pb-3 font-semibold text-center">
            Gostos Pessoais
          </h1>
          <div className="bg-dark-10 p-5">
            <p className="text-lg text-center">
              🍥 Grande fã de anime 🚀 Apaixonada por ficção científica 😍
              Amante da tecnologia 🎶 da música 🥇 e dos esportes 🎮 Gamer nas
              horas vagas
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-3xl pb-3 font-semibold text-center">
            Minhas Motivações
          </h1>
          <div className="bg-dark-10 p-5">
            <p className="text-lg text-center">
              Sempre fui uma pessoa apaixonada por tecnologia e busco sempre
              formas de desenvolver minhas habilidades. Meus sonho é ser
              programadora ainda tenho muito o que aprender, tenho certeza que a
              comunidade Codigo Certo Coders vai me acrescentar muita coisa boa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PersonalTastes() {
  return (
    <div className="w-full h-screen overflow-y-scroll bg-background bg-cover">
      <div>
        <div>
          <div className="flex justify-center py-4 mb-4">
            <img
              className="w-[314px] h-[324px] rounded-full border-x-[10px] border-dark-10 p-2 hover:scale-105 duration-300"
              src="/assets/imagens/perfil.jpg"
              alt="Imagem de perfil"
            />
          </div>
        </div>
        <div className="px-20 flex flex-col gap-14 ">
          <div className="">
            <h1 className="text-3xl mb-3 font-semibold text-center ">
              Gostos Pessoais
            </h1>
            <div className="bg-dark-10 p-5">
              <p className="text-lg text-center">
                🍥 Grande fã de anime 🚀 Apaixonada por ficção científica 😍
                Amante da tecnologia 🎶 da música 🥇 e dos esportes <br />
                🎮 Gamer nas horas vagas
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-3xl mb-3 font-semibold text-center">
              Minhas Motivações
            </h1>
            <div className="bg-dark-10 p-5 mb-10">
              <p className="text-lg text-center">
                Sempre fui uma pessoa apaixonada por tecnologia e busco sempre
                formas de desenvolver minhas habilidades. Meus sonho é ser
                programadora ainda tenho muito o que aprender, tenho certeza que
                a comunidade Codigo Certo Coders vai me acrescentar muita coisa
                boa. O que mais me motiva é a minha determinação de nunca
                desistir e a minha família que está sempre do meu lado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

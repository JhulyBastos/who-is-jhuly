export default function About() {
  return (
    <div className="w-full h-full bg-dark-20 ">
      <div>
        <div className="text-dark-10 flex flex-col lg:flex-row justify-center py-2 px-10 gap-10 ">
          <div className="w-full">
            <div className="text-dark-10 py-5 mb-4">
              <div className="flex gap-2">
                <img
                  className="w-[50px] h-[50px]"
                  src="/assets/icons/globo.png"
                  alt="ícone de um globo"
                />
                <div className="">
                  <h1 className="font-semibold">Vikipédia</h1>
                  <p>A enciclopédia livre</p>
                </div>
              </div>
            </div>
            <h1 className="text-xl font-medium">Jhuly Bastos</h1>
            <hr />
            <p className="py-4">
              Olá, eu me chamo Jhuly. Sou formada em Design Gráfico e atualmente
              estou estudando Análise e Desenvolvimento de Sistemas. Eu sempre
              fui apaixonada por tecnologia desde criança, porém só comecei a
              ter mais contato durante a pandemia, quando comecei a fazer alguns
              cursos online e gratuitos. A área da tecnologia pela qual mais me
              identifico é o desenvolvimento de software, principalmente o
              front-end.
              <br />
              <br />
              Esse é o meu foco: desenvolver minhas habilidades no front-end.
              Atualmente, estou me aprofundando no React e no TypeScript. Ainda
              tenho muito o que aprender e estou animada com isso. Mal posso
              esperar para aprender cada dia mais.
              <br />
              <br />
              Esse meu projeto é algo simples, mas feito com muito carinho. Tem
              apenas seis meses que comecei a estudar essas tecnologias, e estou
              feliz com tudo que aprendi até agora.
            </p>
            <br />
            <h1 className="text-xl font-medium">Formação acadêmica</h1>
            <hr />
            <p className="py-4">
              <span className="font-semibold">
                Ensino superior em Análise e Desenvolvimento de Sistemas
              </span>{" "}
              <br /> 02/2023 - 06/2025 - Uninter
              <br /> <br />
              <span className="font-semibold">
                Ensino superior completo em Design gráfico
              </span>{" "}
              <br /> Concluído 03/2023 - Uninter
            </p>
          </div>

          <div>
            <div className="flex justify-center"></div>
            <div className="w-[420px] h-[700px] rounded-sm border border-dark-50">
              <div className="flex flex-col justify-center items-center">
                <img
                  className="p-2 pb-0"
                  src="/assets/imagens/jhuly.png"
                  alt="Foto da Jhuly Bastos"
                />
                <p className="text-sm pb-2">Jhuly em 2024</p>

                <div className="w-[410px] h-[22px] bg-dark-40 flex justify-center items-center font-semibold">
                  Informações pessoais
                </div>
              </div>
              <ol className="p-1">
                <li className="text-sm">
                  <span className="font-semibold text-base">
                    Nome completo{" "}
                  </span>{" "}
                  Jhuly T. Bastos dos Santos
                </li>
                <li className="text-sm">
                  <span className="font-semibold text-base">
                    Data de nascimento{" "}
                  </span>{" "}
                  18 de Setembro de 2001 {`${"(22 anos)"}`}
                </li>
                <li className="text-sm">
                  <span className="font-semibold text-base">
                    Local de nascimento{" "}
                  </span>{" "}
                  Belo Horizonte, Minas Gerais, Brasil
                </li>
              </ol>
              <div className="flex justify-center ">
                <div className="w-[410px] h-[22px] bg-dark-40 flex justify-center items-center font-semibold">
                  Habilidades
                </div>
              </div>
              <div className="flex justify-center text-center">
                <h1 className="p-1">
                  JavaScript, Typescript, React, Tailwind, Git, Github, HTML5,
                  CSS3{" "}
                </h1>
              </div>
              <div className="flex justify-center ">
                <div className="w-[410px] h-[22px] bg-dark-40 flex justify-center items-center font-semibold">
                  Contato
                </div>
              </div>
              <ol className="p-1">
                <li className="text-sm">
                  <span className="font-semibold text-base">Linkedin </span>
                  <a
                    className="text-dark-60"
                    href="https://www.linkedin.com/in/jhuly-bastos-1b7b821bb/"
                    target="_blank"
                  >
                    Jhuly-Bastos
                  </a>
                </li>
                <li className="text-sm">
                  <span className="font-semibold text-base">GitHub </span>
                  <a
                    className="text-dark-60"
                    href="https://github.com/JhulyBastos"
                    target="_blank"
                  >
                    JhulyBastos
                  </a>
                </li>
                <li className="text-sm">
                  <span className="font-semibold text-base">E-mail </span>
                  jhulytbds@gmail.com
                </li>
                <li className="text-sm">
                  <span className="font-semibold text-base">WhatsApp </span>
                  31 9 86921270
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

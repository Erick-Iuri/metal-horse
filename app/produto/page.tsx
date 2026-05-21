import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    /* main div */
    <div className="h-full bg-white">
      {/* Barra de Navegação 01 🚢 */}
      <div className="bg-black text-white">
        <div
          className="
        flex 
        justify-center 
        space-x-4 
        max-w-360 
        mx-auto 
        items-center 
        p-3"
        >
          {/* LOGO da marca 1/3*/}
          <Link href="/">
            <div>
              <Image alt="logo" src={"/LOGO.png"} width={230} height={100} />
            </div>
          </Link>

          {/* BARRA DE PESQUISA 2/3*/}
          <div className="flex w-310">
            <input
              type="text"
              placeholder="Busque na Metal Horse"
              className="
              bg-white 
              text-black 
              w-full 
              h-11 
              p-1
              px-4 
              py-2
              focus:outline-none
              rounded-sm"
            />
          </div>

          {/* USER MENU 3/3 */}
          <div
            className="
          flex 
          space-x-3"
          >
            <div
              className="flex
            flex-row
            justify-center
            gap-3 
            w-50 h-10"
            >
              <Image
                src="/icons/Ellipse.png"
                alt="perfil"
                width={30}
                height={30}
                className="
              w-auto
              h-auto
              object-cover"
              />
              <a className="w-20 pt-2">Olá, Erick</a>
            </div>

            <div
              className="
            flex 
            space-x-4"
            >
              <img src={"/icons/favorite.svg"} width={30} height={10} />

              <img src={"/icons/shooping cart.svg"} width={30} height={10} />
            </div>
          </div>
        </div>

        {/* Botões de ação */}
        <div
          className="
        flex 
        justify-center 
        items-center"
        >
          <div
            className="
          flex 
          space-x-1 
          p-1 
          text-lg"
          >
            <Link
              href="/"
              className="
              px-8 
              py-1.5 
              bg-[#E82A25] 
              rounded-sm 
              font-semibold"
            >
              Conexões
            </Link>
            <Link
              href="/"
              className="
              hover:bg-white 
              hover:text-black
              duration-300
              ease-in-out
              transition 
              py-1 
              px-5 
              border-2 
              rounded-sm"
            >
              Mangueiras
            </Link>
            <Link
              href="/"
              className="p-3 
              hover:bg-white/20
              duration-100
              ease-in-out
              transition
              px-3 py-2 rounded-sm "
            >
              Radiadores
            </Link>
            <Link
              href="/"
              className="p-3 
              hover:bg-white/20
              duration-100
              ease-in-out
              transition
              px-3 py-2 rounded-sm"
            >
              Proteção Térmicas
            </Link>
            <Link
              href="/"
              className="p-3 
              hover:bg-white/20
              duration-100
              ease-in-out
              transition
              px-3 py-2 rounded-sm"
            >
              Escapamentos
            </Link>
            <Link
              href="/"
              className="p-3  hover:bg-white/20
              duration-100
              ease-in-out
              transition
              px-3 py-2 rounded-sm"
            >
              Injeção
            </Link>
            <Link
              href="/"
              className="p-3  hover:bg-white/20
              duration-100
              ease-in-out
              transition
              px-3 py-2 rounded-sm"
            >
              Filtros
            </Link>
            <Link
              href="/"
              className="p-3  hover:bg-white/20
              duration-100
              ease-in-out
              transition
              px-3 py-2 rounded-sm"
            >
              Acessórios
            </Link>
            <Link
              href="/"
              className="p-3  hover:bg-white/20
              duration-100
              ease-in-out
              transition
              px-3 py-2 rounded-sm"
            >
              Elétrica
            </Link>
            <Link
              href="/"
              className="p-3  hover:bg-white/20
              duration-100
              ease-in-out
              transition
              px-3 py-2 rounded-sm"
            >
              Bancos e Cintos
            </Link>
          </div>
        </div>

        {/* Faixa vermelha */}
        <div
          className="
        bg-[#E82A25] 
        w-full 
        h-2 
        my-2"
        ></div>
      </div>

      {/* Página de produto */}
      <div className="flex justify-center">
        <div
          className="
              max-w-360 
              w-360 h-auto"
        >
          {/* Caminho do pproduto */}
          <p
            className="
          pt-5
          font-bold
          "
          >
            {" "}
            Início - Super Core GT3076R A/R 0.60 836028-5003S - Garrett{" "}
          </p>

          {/* Produto mais Comprar (com informações) */}
          <div className="flex pt-5">
            {/* Foto do produto */}
            <div
              className="
            flex
            justify-center
            h-130
            w-1/2
            "
            >
              <Image
                alt="Imagem-produto"
                width="500"
                height="500"
                src="/produtos/Turbina 1.png"
                className="
                p-10
                w-130 h-auto
                "
              />
            </div>

            {/* Descrição e Check-in */}
            <div className="p-10 h-130 w-1/2">
              {/* Colocar nos favoritos */}
              <div className="flex justify-end">
                <Image
                  alt="Imagem-produto"
                  width="20"
                  height="20"
                  src="/icons/favoritos cinza.png"
                  className="w-5 h-auto"
                />
              </div>

              {/* Rating e nota */}
              <div className="flex justify-end gap-1 pt-3">
                <Image
                  alt="Imagem-produto"
                  width="20"
                  height="20"
                  src="/icons/Start.svg"
                  className="w-6 h-auto"
                />
                <Image
                  alt="Imagem-produto"
                  width="20"
                  height="20"
                  src="/icons/Start.svg"
                  className="w-6 h-auto"
                />
                <Image
                  alt="Imagem-produto"
                  width="20"
                  height="20"
                  src="/icons/Start.svg"
                  className="w-6 h-auto"
                />
                <Image
                  alt="Imagem-produto"
                  width="20"
                  height="20"
                  src="/icons/Start.svg"
                  className="w-6 h-auto"
                />
                <Image
                  alt="Imagem-produto"
                  width="20"
                  height="20"
                  src="/icons/Start.svg"
                  className="w-6 h-auto"
                />
                <p className="font-bold text-lg">(5)</p>
              </div>

              {/* Rating e nota */}
              <div className="flex justify-start gap-1 pt-3">
                <p className="font-bold text-xl">
                  Super Core GT3076R A/R 0.60 836028-5003S - Garrett
                </p>
              </div>

              {/* Titulo sobre o produto */}
              <div className="flex justify-start gap-1 pt-5">
                <Image
                  alt="Esclamação-vermmelho"
                  width="20"
                  height="20"
                  src="/icons/Marcador Vermelho.png"
                  className="w-5 h-auto"
                />
                <p className="font-bold text-[#E82A25] text-sm">
                  SOBRE O PRODUTO
                </p>
              </div>

              {/* Descrição  */}
              <div className="flex justify-start gap-1 pt-5">
                <p className="text-md font-medium">
                  Garrett® GTX é o nome que foi pioneiro na tecnologia turbo e
                  impulsionou as equipes de corridas de arrancada e de estrada a
                  quebrar centenas de recordes mundiais. As rodas fundidas do
                  compressor apresentam aerodinâmica original da série GTX e
                  fornecem durabilidade e longevidade máximas. As opções de
                  caixa de turbina propiciam uma melhor escolha com grande
                  variedade de configurações A/R e flange...
                </p>
              </div>

              {/* Preço */}
              <div className="flex justify-start flex-col gap-0.5 pt-5">
                <p className="text-lg font-bold line-through">R$ 529,00</p>
                <p className="text-[40px] font-bold text-[#E82A25]">
                  R$ 439,00
                </p>
                <div className="flex">
                  <p className="text-lg pr-2">Em até 10x de R$ 35,00 </p>
                  <p className="text-lg font-bold">sem juros</p>
                </div>
              </div>

              {/* Botões de comprar/carrinho */}
              <div className="flex justify-center pt-5">
                <button
                  className="
                cursor-pointer
                bg-[#E82A25] 
                w-full h-12 
                text-white
                font-bold
                rounded-sm
                
                hover:bg-red-500
                transition
                duration-75
                "
                >
                  Comprar agora
                </button>
              </div>

              <div
                className="
              cursor-pointer
              flex 
              gap-2
              justify-center
              items-center
              rounded-sm border-2 mt-1
              
            hover:bg-gray-100
              transition
              duration-75
              "
              >
                <Image
                  alt="Esclamação-vermmelho"
                  width="20"
                  height="20"
                  src="/icons/Add carrinho.svg"
                  className="w-5 h-5"
                />
                <button
                  className=" 
                h-12
                font-bold
                "
                >
                  Adicionar ao carrinho
                </button>
              </div>

              {/* Consultar CEP */}
              <div className="flex justify-start gap-2 pt-5">
                <Image
                  alt="Esclamação-vermmelho"
                  width="20"
                  height="20"
                  src="/icons/Frete icone.png"
                  className="w-7 h-auto"
                />
                <p className="font-bold text-[#E82A25] text-sm">
                  CONSULTE FRETE
                </p>
              </div>

              <div className="flex justify-start gap-1 pt-5">
                <input
                  type="text"
                  placeholder="Inserir Cep*"
                  className="
              bg-white 
              text-black 
              w-full 
              h-11 
              p-1
              px-4 
              py-2
              rounded-sm
              border"
                />
                <div
                  className="
                flex 
                justify-center
                items-center
                cursor-pointer
                bg-[#E82A25] 
                w-20 h-auto
                font-bold
                rounded-sm
                
                hover:bg-red-500
                transition
                duration-75"
                >
                  <Image
                  alt="Esclamação-vermmelho"
                  width="20"
                  height="20"
                  src="/icons/search branco.png"
                  className="w-10 h-10 p-2"
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

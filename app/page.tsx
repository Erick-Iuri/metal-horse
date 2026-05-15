import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    /* main div */
    <div>
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
          <div>
            <Image alt="logo" src={"/LOGO.png"} width={230} height={100} />
          </div>

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
            <div className="flex w-30">
              <Image 
              src="/icons/Ellipse.png"
              alt="perfil"
              width={30}
              height={30}
              className="
              w-auto
              h-auto
              object-cover" />
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

      {/* Banners 01*/}
      <div className="flex justify-center">
        <div className="
        max-w-360 
        w-360 
        h-100">
           <Image 
           alt="banner01" 
           width={1280} 
           height={720} 
           src="/banners/banner.jpg"
           className="rounded-sm w-full h-auto object-cover" />
        </div>
      </div>

      {/* Produtos em recomendação */}
      <div className="
      mt-20
      text-black
      w-full
      ">
        <div className="
        flex
        items-start
        gap-2
        max-w-360 
        mx-auto
        ">
          <Image 
          src="/icons/Start.svg" 
          alt="Icone" 
          width={6} 
          height={6} 
          className="w-6 h-6"/>
        <p
        className="text-xl
        font-bold
        ">Destaques Metal Horse</p>
        </div>
        
      </div>

    </div>
  );
}

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

      {/* Banners 01*/}
      <div className="flex justify-center">
        <div
          className="
        max-w-360 
        w-360 
        h-100"
        >
          <Image
            alt="banner01"
            width={1280}
            height={720}
            src="/banners/banner.jpg"
            className="rounded-sm w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Produtos em recomendação */}
      <div
        className="
      mt-20
      text-black
      w-full
      "
      >
        {/* Destaques Metal Horse */}
        <div
          className="
        flex
        items-center
        gap-2
        max-w-360 
        mx-auto
        "
        >
          <Image
            src="/icons/Start.svg"
            alt="Icone"
            width={6}
            height={6}
            className="w-6 h-6"
          />
          <p
            className="
          text-xl
          font-bold
        "
          >
            Destaques Metal Horse
          </p>
        </div>

        {/* Recomendações Produtos + Texto */}
        <div
          className="
        my-6
        flex
        justify-center
        gap-4
        max-w-360 
        mx-auto"
        >
          {/* Cards de recomendação */}
          <div
            className="
          flex
          flex-col
          items-center
          gap-2
          w-30 h-30

          hover:scale-105
          transition
          duration-300
          "
          >
            <Image
              alt="Conexões"
              src="/destaques/Conexões.png"
              width={300}
              height={300}
              className="
            w-40 h-40
            rounded-full
            "
            />
            <a
              href="* "
              className="
            text-xl
            font-bold
            "
            >
              Conexões
            </a>
          </div>

          {/* Downpipes */}
          <div
            className="
          flex
          flex-col
          items-center
          gap-2
          w-30 h-30

          hover:scale-105
          transition
          duration-300
          "
          >
            <Image
              alt="Downpipes"
              src="/destaques/Downpipes.png"
              width={300}
              height={300}
              className="
            w-40 h-40
            rounded-full
            "
            />
            <a
              href="* "
              className="
            text-xl
            font-bold
            "
            >
              Downpipes
            </a>
          </div>

          {/* Bancos */}
          <div
            className="
          flex
          flex-col
          items-center
          gap-2
          w-30 h-30

          hover:scale-105
          transition
          duration-300
          "
          >
            <Image
              alt="Bancos"
              src="/destaques/Bancos.png"
              width={300}
              height={300}
              className="
            w-40 h-40
            rounded-full
            "
            />
            <a
              href="* "
              className="
            text-xl
            font-bold
            "
            >
              Bancos
            </a>
          </div>

          {/* Cintos */}
          <div
            className="
          flex
          flex-col
          items-center
          gap-2
          w-30 h-30

          hover:scale-105
          transition
          duration-300
          "
          >
            <Image
              alt="Cintos"
              src="/destaques/Cintos.png"
              width={300}
              height={300}
              className="
            w-40 h-40
            rounded-full
            "
            />
            <a
              href="* "
              className="
            text-xl
            font-bold
            "
            >
              Cintos
            </a>
          </div>

          {/* Inter Coolers */}
          <div
            className="
          flex
          flex-col
          items-center
          gap-2
          w-30 h-30

          hover:scale-105
          transition
          duration-300
          "
          >
            <Image
              alt="InterCoolers"
              src="/destaques/Inter Cooler.png"
              width={300}
              height={300}
              className="
            w-40 h-40
            rounded-full
            "
            />
            <a
              href="* "
              className="
            text-xl
            font-bold
            "
            >
              Coolers
            </a>
          </div>

          {/* Bancos 000000*/}
          <div
            className="
          flex
          flex-col
          items-center
          gap-2
          w-30 h-30

          hover:scale-105
          transition
          duration-300
          "
          >
            <Image
              alt="Bancos"
              src="/destaques/Bancos.png"
              width={300}
              height={300}
              className="
            w-40 h-40
            rounded-full
            "
            />
            <a
              href="* "
              className="
            text-xl
            font-bold
            "
            >
              Bancos
            </a>
          </div>

          {/* Metanol */}
          <div
            className="
          flex
          flex-col
          items-center
          gap-2
          w-30 h-30

          hover:scale-105
          transition
          duration-300
          "
          >
            <Image
              alt="Metanol"
              src="/destaques/Metanol.png"
              width={300}
              height={300}
              className="
            w-40 h-40
            rounded-full
            "
            />
            <a
              href="* "
              className="
            text-xl
            font-bold
            "
            >
              Metanol
            </a>
          </div>

          {/* Red Line Oil */}
          <div
            className="
          flex
          flex-col
          items-center
          gap-2
          w-30 h-30

          hover:scale-105
          transition
          duration-300
          "
          >
            <Image
              alt="Red Line Oil"
              src="/destaques/Red Line Oil.png"
              width={300}
              height={300}
              className="
            w-40 h-40
            rounded-full
            "
            />
            <a
              href="* "
              className="
            text-xl
            font-bold
            "
            >
              Red Line Oil
            </a>
          </div>

          {/* Roupas */}
          <div
            className="
          flex
          flex-col
          items-center
          gap-2
          w-30 h-30

          hover:scale-105
          transition
          duration-300
          "
          >
            <Image
              alt="Roupas"
              src="/destaques/Roupas.png"
              width={300}
              height={300}
              className="
            w-40 h-40
            rounded-full
            "
            />
            <a
              href="* "
              className="
            text-xl
            font-bold
            "
            >
              Roupas
            </a>
          </div>

          {/* Turbinas */}
          <div
            className="
          flex
          flex-col
          items-center
          gap-2
          w-30 h-30

          hover:scale-105
          transition
          duration-300
          "
          >
            <Image
              alt="Turbinas"
              src="/destaques/Turbinas.png"
              width={300}
              height={300}
              className="
            w-40 h-40
            rounded-full
            "
            />
            <a
              href="* "
              className="
            text-xl
            font-bold
            "
            >
              Turbinas
            </a>
          </div>

          {/* Downpipes */}
          <div
            className="
          flex
          flex-col
          items-center
          gap-2
          w-30 h-30

          hover:scale-105
          transition
          duration-300
          "
          >
            <Image
              alt="Downpipes"
              src="/destaques/Downpipes.png"
              width={300}
              height={300}
              className="
            w-40 h-40
            rounded-full
            "
            />
            <a
              href="* "
              className="
            text-xl
            font-bold
            "
            >
              Downpipes
            </a>
          </div>
        </div>

        {/* Red Line Oil */}
        <div
          className="
        mt-20
        flex items-center
        gap-2
        max-w-360 
        mx-auto
        "
        >
          <Image
            src="/icons/Red Fire.svg"
            alt="Icone"
            width={6}
            height={6}
            className="w-6 h-6"
          />
          <p
            className="text-xl
        font-bold
        "
          >
            Red Line Oil
          </p>
        </div>

        {/* Produtos linha 01 */}
        <div className="
        flex items-center
        gap-2 
        max-w-360 
        mx-auto mt-10
        "
        >
          <div
          className="flex flex-col
          justify-center
          items-center
          bg-white
          w-80 h-120
          rounded-lg
          "
          >
            {/* Icones de promoção */}
            <div>
              <div></div>
              <div></div>
            </div>
            {/* Imagem do produto */}
            <Image 
            alt="Produto" 
            width={300} 
            height={300} 
            src="/produtos/Produto 01.png"
            className="
            p-1
            "
            />
            {/* Titulo do produto */}
            <text
            className="
            px-5
            w-full
            text-left
            text-lg
            font-bold
            "
            >Red Line 40WT Race Oil 946ml</text>

            {/* Preço antigo */}
            <text
            className="
            px-5
            w-full
            text-left
            text-lg
            font-light
            line-through
            "
            >R$ 449,90</text>

            {/* Preço atual */}
            <text
            className="
            px-5
            w-full
            text-left
            text-xl
            font-bold
            "
            >R$ 359,91</text>

            {/* Linha de gatilho */}
            <text
            className="
            px-5
            w-full
            text-left
            text-xl
            font-light
            "
            >No PIX ou 10x no Crêdito</text>
          </div>

        </div>

        {/* place holder */}
        <div
          className="
        mt-20
        flex items-center
        gap-2
        max-w-360 
        mx-auto
        "
        >
          <Image
            src="/icons/Red Fire.svg"
            alt="Icone"
            width={6}
            height={6}
            className="w-6 h-6"
          />
          <p
            className="text-xl
        font-bold
        "
          >
            Red Line Oil
          </p>
        </div>
      </div>
    </div>
  );
}

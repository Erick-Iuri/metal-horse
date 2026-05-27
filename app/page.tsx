import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    /* main div */
    <div>
      {/* Barra de Navegação 01 🚢 */}
      <div className="bg-black text-white">
        <div
          className="flex justify-between p-6 md:p-10
        md:justify-center 
        md:space-x-4 
        md:max-w-360 
        md:mx-auto 
        md:items-center
        "
        >
          {/* LOGO da marca 1/3*/}
          <Link href="/">
            <div>
              <Image alt="logo" src={"/LOGO.png"} width={230} height={100} />
            </div>
          </Link>

          {/* BARRA DE PESQUISA 2/3*/}
          <div className="hidden md:flex w-310">
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
          <div className="flex space-x-3">
            <div
              className="
            hidden md:flex
            flex-row justify-center gap-3 
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
        hidden
        lg:flex 
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
              href="/produto"
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
              href="/produto"
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
              href="/produto"
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
              href="/produto"
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
              href="/produto"
              className="p-3  hover:bg-white/20
              duration-100
              ease-in-out
              transition
              px-3 py-2 rounded-sm"
            >
              Injeção
            </Link>

            <Link
              href="/produto"
              className="p-3  hover:bg-white/20
              duration-100
              ease-in-out
              transition
              px-3 py-2 rounded-sm"
            >
              Filtros
            </Link>

            <Link
              href="/produto"
              className="p-3  hover:bg-white/20
              duration-100
              ease-in-out
              transition
              px-3 py-2 rounded-sm"
            >
              Acessórios
            </Link>

            <Link
              href="/produto"
              className="p-3  hover:bg-white/20
              duration-100
              ease-in-out
              transition
              px-3 py-2 rounded-sm"
            >
              Elétrica
            </Link>

            <Link
              href="/produto"
              className="
              hidden
              xl:flex
              p-3  hover:bg-white/20
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
      <div className="flex justify-center p-2">
        <div className=" max-w-360 w-360 h-auto">
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
      <div className="flex flex-col w-full gap-7 p-2 text-black">
        {/* Destaques Metal Horse texto */}
        <div
          className="flex justify-start
        max-w-360
        xl:pl-2 
        2xl:w-360
        2xl:mx-auto
        "
        >
          <div className="flex items-center gap-2">
            <Image
              src="/icons/Start.svg"
              alt="Icone"
              width={6}
              height={6}
              className="w-6 h-6"
            />
            <p className="text-xl font-bold">Destaques Metal Horse</p>
          </div>
        </div>

        {/* Recomendações Produtos */}
        <div
          className="flex justify-start gap-4
        max-w-360
        md:mx-auto"
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
            className="flex flex-col
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
            className="hidden md:flex sm:flex flex-col items-center
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

          {/* Bancos */}
          <div
            className="hidden md:flex flex-col sm:flex items-center
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
            className="hidden lg:flex flex-col items-center
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
            className="hidden lg:flex flex-col items-center
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
            className="hidden flex-col items-center
          xl:flex
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
            className="hidden flex-col items-center
          xl:flex
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
            className="hidden flex-col items-center
          2xl:flex
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

        {/* Red Line Oil texto */}
        <div
          className="flex justify-start gap-2 mt-10
        max-w-360
        xl:pl-2 
        2xl:w-360
        2xl:mx-auto"
        >
          <Image
            src="/icons/Red Fire.svg"
            alt="Icone"
            width={6}
            height={6}
            className="w-6 h-6"
          />
          <p className="text-xl font-bold">Red Line Oil</p>
        </div>

        {/* Produtos linha 01 */}
        <div
          className="flex justify-center 
        gap-2 
        max-w-360 
        md:mx-auto
        "
        >
          {/* Produto lista */}

          {/* produto 01 */}
          <Link href="/produto">
            <div
              className="flex flex-col justify-center
          w-65 min-h-95 p-5
          items-center
          bg-white
          text-[#1E1E1E]
          rounded-lg

          cursor-pointer
          hover:-translate-y-1
          hover:shadow-xl
          transition"
            >
              {/* Icones de promoção */}
              <div
                className="flex justify-between gap-35
                w-55 min-h-7 "
              >
                <div>
                  <Image
                    alt="icone promoção"
                    height={7}
                    width={7}
                    src="/icons/Red Fire.svg"
                    className="w-6 h-auto"
                  />
                </div>

                <div
                  className="
              flex 
              justify-center
              gap-2 "
                >
                  <Image
                    alt="icone promoção"
                    height={7}
                    width={7}
                    src="/icons/add carrinho cinza.png"
                    className="w-6 h-6"
                  />
                  <Image
                    alt="icone promoção"
                    height={6}
                    width={6}
                    src="/icons/favoritos cinza.png"
                    className="w-6 h-6"
                  />
                </div>
              </div>
              {/* Imagem do produto */}
              <Image
                alt="Produto"
                width={300}
                height={300}
                src="/produtos/Produto 01.png"
                className="
              h-auto w-50
              p-1
              hover:scale-105
              transition
              duration-300
              "
              />
              {/* Titulo do produto */}
              <p
                className="min-h-13
            text-left
            text-md
            font-bold
            "
              >
                Red Line 40WT Race Oil 946ml
              </p>

              {/* Preço antigo */}
              <p
                className="
            w-full
            text-left
            text-sm
            font-light
            line-through
            "
              >
                R$ 449,90
              </p>

              {/* Preço atual */}
              <p
                className="
            w-full
            text-left
            text-md
            font-bold
            "
              >
                R$ 359,91
              </p>

              {/* Linha de gatilho */}
              <p
                className="w-full text-left
            text-sm
            font-light
            "
              >
                No PIX ou 10x no Crêdito
              </p>
            </div>
          </Link>

          {/* Produto lista 02*/}
          <Link href="/produto02">
            <div
              className="hidden sm:flex flex-col justify-center
          w-65 min-h-95 p-5
          items-center
          bg-white
          text-[#1E1E1E]
          rounded-lg

          cursor-pointer
          hover:-translate-y-1
          hover:shadow-xl
          transition"
            >
              {/* Icones de promoção */}
              <div
                className="flex justify-between gap-35
                w-55 min-h-7 "
              >
                <div>
                  <Image
                    alt="icone promoção"
                    height={7}
                    width={7}
                    src="/icons/Red Fire.svg"
                    className="w-6 h-auto"
                  />
                </div>

                <div
                  className="
              flex 
              justify-center
              gap-2 "
                >
                  <Image
                    alt="icone promoção"
                    height={7}
                    width={7}
                    src="/icons/add carrinho cinza.png"
                    className="w-6 h-6"
                  />
                  <Image
                    alt="icone promoção"
                    height={6}
                    width={6}
                    src="/icons/favoritos cinza.png"
                    className="w-6 h-6"
                  />
                </div>
              </div>
              {/* Imagem do produto */}
              <Image
                alt="Produto"
                width={300}
                height={300}
                src="/produtos/Liquid red line.png"
                className="
              h-auto w-50
              p-1
              hover:scale-105
              transition
              duration-300
              "
              />
              {/* Titulo do produto */}
              <p
                className="min-h-13
            text-left
            text-md
            font-bold"
              >
                Red Line 5W40 Motor Oil 946ml
              </p>

              {/* Preço antigo */}
              <p
                className="
            w-full
            text-left
            text-sm
            font-light
            line-through
            "
              >
                R$ 449,90
              </p>

              {/* Preço atual */}
              <p
                className="
            w-full
            text-left
            text-md
            font-bold
            "
              >
                R$ 359,91
              </p>

              {/* Linha de gatilho */}
              <p
                className="w-full text-left
            text-sm
            font-light
            "
              >
                No PIX ou 10x no Crêdito
              </p>
            </div>
          </Link>

          {/* Produto lista 03*/}
          <Link href="/produto03">
            <div
              className="hidden lg:flex
          flex-col justify-center
          w-65 min-h-95 p-5
          items-center
          bg-white
          text-[#1E1E1E]
          rounded-lg

          cursor-pointer
          hover:-translate-y-1
          hover:shadow-xl
          transition"
            >
              {/* Icones de promoção */}
              <div
                className="flex justify-between gap-35
                w-55 min-h-7 "
              >
                <div>
                  <Image
                    alt="icone promoção"
                    height={7}
                    width={7}
                    src="/icons/Red Fire.svg"
                    className="w-6 h-auto"
                  />
                </div>

                <div
                  className="
              flex 
              justify-center
              gap-2 "
                >
                  <Image
                    alt="icone promoção"
                    height={7}
                    width={7}
                    src="/icons/add carrinho cinza.png"
                    className="w-6 h-6"
                  />
                  <Image
                    alt="icone promoção"
                    height={6}
                    width={6}
                    src="/icons/favoritos cinza.png"
                    className="w-6 h-6"
                  />
                </div>
              </div>
              {/* Imagem do produto */}
              <Image
                alt="Produto"
                width={300}
                height={300}
                src="/produtos/oleo azul.png"
                className="
              h-auto w-50
              p-1
              hover:scale-105
              transition
              duration-300
              "
              />
              {/* Titulo do produto */}
              <p
                className="min-h-13
            text-left
            text-md
            font-bold"
              >
                RED LINE LIQUID ASSEMBLY LUBE
              </p>

              {/* Preço antigo */}
              <p
                className="
            w-full
            text-left
            text-sm
            font-light
            line-through
            "
              >
                R$ 449,90
              </p>

              {/* Preço atual */}
              <p
                className="
            w-full
            text-left
            text-md
            font-bold
            "
              >
                R$ 359,91
              </p>

              {/* Linha de gatilho */}
              <p
                className="w-full text-left
            text-sm
            font-light
            "
              >
                No PIX ou 10x no Crêdito
              </p>
            </div>
          </Link>

          {/* Produto lista 04*/}
          <Link href="/produto03">
            <div
              className="hidden xl:flex
          flex-col justify-center
          w-65 min-h-95 p-5
          items-center
          bg-white
          text-[#1E1E1E]
          rounded-lg

          cursor-pointer
          hover:-translate-y-1
          hover:shadow-xl
          transition"
            >
              {/* Icones de promoção */}
              <div
                className="flex justify-between gap-35
                w-55 min-h-7 ">
                <div>
                  <Image
                    alt="icone promoção"
                    height={7}
                    width={7}
                    src="/icons/Red Fire.svg"
                    className="w-6 h-auto"
                  />
                </div>

                <div
                  className="
              flex 
              justify-center
              gap-2 "
                >
                  <Image
                    alt="icone promoção"
                    height={7}
                    width={7}
                    src="/icons/add carrinho cinza.png"
                    className="w-6 h-6"
                  />
                  <Image
                    alt="icone promoção"
                    height={6}
                    width={6}
                    src="/icons/favoritos cinza.png"
                    className="w-6 h-6"
                  />
                </div>
              </div>
              {/* Imagem do produto */}
              <Image
                alt="Produto04"
                width={300}
                height={300}
                src="/produtos/Camisetas.png"
                className="
              h-auto w-50
              p-1
              hover:scale-105
              transition
              duration-300
              "
              />
              {/* Titulo do produto */}
              <p
                className="min-h-13
            text-left
            text-md
            font-bold"
              >
                Camiseta Red Line Oil USA - Preta
              </p>

              {/* Preço antigo */}
              <p
                className="
            w-full
            text-left
            text-sm
            font-light
            line-through
            "
              >
                R$ 449,90
              </p>

              {/* Preço atual */}
              <p
                className="
            w-full
            text-left
            text-md
            font-bold
            "
              >
                R$ 359,91
              </p>

              {/* Linha de gatilho */}
              <p
                className="w-full text-left
            text-sm
            font-light
            "
              >
                No PIX ou 10x no Crêdito
              </p>
            </div>
          </Link>

          {/* Produto lista 05*/}
          <Link href="/produto03">
            <div
              className="hidden xl:flex
          flex-col justify-center
          w-65 min-h-95 p-5
          items-center
          bg-white
          text-[#1E1E1E]
          rounded-lg

          cursor-pointer
          hover:-translate-y-1
          hover:shadow-xl
          transition"
            >
              {/* Icones de promoção */}
              <div
                className="flex justify-between gap-35
                w-55 min-h-7 ">
                <div>
                  <Image
                    alt="icone promoção"
                    height={7}
                    width={7}
                    src="/icons/Red Fire.svg"
                    className="w-6 h-auto"
                  />
                </div>

                <div
                  className="
              flex 
              justify-center
              gap-2 "
                >
                  <Image
                    alt="icone promoção"
                    height={7}
                    width={7}
                    src="/icons/add carrinho cinza.png"
                    className="w-6 h-6"
                  />
                  <Image
                    alt="icone promoção"
                    height={6}
                    width={6}
                    src="/icons/favoritos cinza.png"
                    className="w-6 h-6"
                  />
                </div>
              </div>
              {/* Imagem do produto */}
              <Image
                alt="Produto04"
                width={300}
                height={300}
                src="/produtos/Camisetas.png"
                className="
              h-auto w-50
              p-1
              hover:scale-105
              transition
              duration-300
              "
              />
              {/* Titulo do produto */}
              <p
                className="min-h-13
            text-left
            text-md
            font-bold"
              >
                Camiseta Red Line Oil USA - Preta
              </p>

              {/* Preço antigo */}
              <p
                className="
            w-full
            text-left
            text-sm
            font-light
            line-through
            "
              >
                R$ 449,90
              </p>

              {/* Preço atual */}
              <p
                className="
            w-full
            text-left
            text-md
            font-bold
            "
              >
                R$ 359,91
              </p>

              {/* Linha de gatilho */}
              <p
                className="w-full text-left
            text-sm
            font-light
            "
              >
                No PIX ou 10x no Crêdito
              </p>
            </div>
          </Link>

        </div>

        {/* Garrett - Advancing Motion texto */}
        <div
          className="flex justify-start gap-2 mt-5
        max-w-360
        xl:pl-2 
        2xl:w-360
        2xl:mx-auto"
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
            Garrett - Advancing Motion
          </p>
        </div>

        {/* Produtos linha 02 */}
        <div
          className="flex justify-center 
        gap-2 
        max-w-360 
        md:mx-auto
        "
        >
          {/* Produto lista */}

          {/* produto 01 */}
          <Link href="/produto">
            <div
              className="flex flex-col justify-center
          w-65 min-h-95 p-5
          items-center
          bg-white
          text-[#1E1E1E]
          rounded-lg

          cursor-pointer
          hover:-translate-y-1
          hover:shadow-xl
          transition"
            >
              {/* Icones de promoção */}
              <div
                className="flex justify-between gap-35
                w-55 min-h-7 "
              >
                <div>
                  <Image
                    alt="icone promoção"
                    height={7}
                    width={7}
                    src="/icons/Red Fire.svg"
                    className="w-6 h-auto"
                  />
                </div>

                <div
                  className="
              flex 
              justify-center
              gap-2 "
                >
                  <Image
                    alt="icone promoção"
                    height={7}
                    width={7}
                    src="/icons/add carrinho cinza.png"
                    className="w-6 h-6"
                  />
                  <Image
                    alt="icone promoção"
                    height={6}
                    width={6}
                    src="/icons/favoritos cinza.png"
                    className="w-6 h-6"
                  />
                </div>
              </div>
              {/* Imagem do produto */}
              <Image
                alt="Produto"
                width={300}
                height={300}
                src="/produtos/Produto 01.png"
                className="
              h-auto w-50
              p-1
              hover:scale-105
              transition
              duration-300
              "
              />
              {/* Titulo do produto */}
              <p
                className="min-h-13
            text-left
            text-md
            font-bold
            "
              >
                Red Line 40WT Race Oil 946ml
              </p>

              {/* Preço antigo */}
              <p
                className="
            w-full
            text-left
            text-sm
            font-light
            line-through
            "
              >
                R$ 449,90
              </p>

              {/* Preço atual */}
              <p
                className="
            w-full
            text-left
            text-md
            font-bold
            "
              >
                R$ 359,91
              </p>

              {/* Linha de gatilho */}
              <p
                className="w-full text-left
            text-sm
            font-light
            "
              >
                No PIX ou 10x no Crêdito
              </p>
            </div>
          </Link>

          {/* Produto lista 02*/}
          <Link href="/produto02">
            <div
              className="hidden sm:flex flex-col justify-center
          w-65 min-h-95 p-5
          items-center
          bg-white
          text-[#1E1E1E]
          rounded-lg

          cursor-pointer
          hover:-translate-y-1
          hover:shadow-xl
          transition"
            >
              {/* Icones de promoção */}
              <div
                className="flex justify-between gap-35
                w-55 min-h-7 "
              >
                <div>
                  <Image
                    alt="icone promoção"
                    height={7}
                    width={7}
                    src="/icons/Red Fire.svg"
                    className="w-6 h-auto"
                  />
                </div>

                <div
                  className="
              flex 
              justify-center
              gap-2 "
                >
                  <Image
                    alt="icone promoção"
                    height={7}
                    width={7}
                    src="/icons/add carrinho cinza.png"
                    className="w-6 h-6"
                  />
                  <Image
                    alt="icone promoção"
                    height={6}
                    width={6}
                    src="/icons/favoritos cinza.png"
                    className="w-6 h-6"
                  />
                </div>
              </div>
              {/* Imagem do produto */}
              <Image
                alt="Produto"
                width={300}
                height={300}
                src="/produtos/Liquid red line.png"
                className="
              h-auto w-50
              p-1
              hover:scale-105
              transition
              duration-300
              "
              />
              {/* Titulo do produto */}
              <p
                className="min-h-13
            text-left
            text-md
            font-bold"
              >
                Red Line 5W40 Motor Oil 946ml
              </p>

              {/* Preço antigo */}
              <p
                className="
            w-full
            text-left
            text-sm
            font-light
            line-through
            "
              >
                R$ 449,90
              </p>

              {/* Preço atual */}
              <p
                className="
            w-full
            text-left
            text-md
            font-bold
            "
              >
                R$ 359,91
              </p>

              {/* Linha de gatilho */}
              <p
                className="w-full text-left
            text-sm
            font-light
            "
              >
                No PIX ou 10x no Crêdito
              </p>
            </div>
          </Link>

          {/* Produto lista 03*/}
          <Link href="/produto03">
            <div
              className="hidden lg:flex
          flex-col justify-center
          w-65 min-h-95 p-5
          items-center
          bg-white
          text-[#1E1E1E]
          rounded-lg

          cursor-pointer
          hover:-translate-y-1
          hover:shadow-xl
          transition"
            >
              {/* Icones de promoção */}
              <div
                className="flex justify-between gap-35
                w-55 min-h-7 "
              >
                <div>
                  <Image
                    alt="icone promoção"
                    height={7}
                    width={7}
                    src="/icons/Red Fire.svg"
                    className="w-6 h-auto"
                  />
                </div>

                <div
                  className="
              flex 
              justify-center
              gap-2 "
                >
                  <Image
                    alt="icone promoção"
                    height={7}
                    width={7}
                    src="/icons/add carrinho cinza.png"
                    className="w-6 h-6"
                  />
                  <Image
                    alt="icone promoção"
                    height={6}
                    width={6}
                    src="/icons/favoritos cinza.png"
                    className="w-6 h-6"
                  />
                </div>
              </div>
              {/* Imagem do produto */}
              <Image
                alt="Produto"
                width={300}
                height={300}
                src="/produtos/oleo azul.png"
                className="
              h-auto w-50
              p-1
              hover:scale-105
              transition
              duration-300
              "
              />
              {/* Titulo do produto */}
              <p
                className="min-h-13
            text-left
            text-md
            font-bold"
              >
                RED LINE LIQUID ASSEMBLY LUBE
              </p>

              {/* Preço antigo */}
              <p
                className="
            w-full
            text-left
            text-sm
            font-light
            line-through
            "
              >
                R$ 449,90
              </p>

              {/* Preço atual */}
              <p
                className="
            w-full
            text-left
            text-md
            font-bold
            "
              >
                R$ 359,91
              </p>

              {/* Linha de gatilho */}
              <p
                className="w-full text-left
            text-sm
            font-light
            "
              >
                No PIX ou 10x no Crêdito
              </p>
            </div>
          </Link>

          {/* Produto lista 04*/}
          <Link href="/produto03">
            <div
              className="hidden xl:flex
          flex-col justify-center
          w-65 min-h-95 p-5
          items-center
          bg-white
          text-[#1E1E1E]
          rounded-lg

          cursor-pointer
          hover:-translate-y-1
          hover:shadow-xl
          transition"
            >
              {/* Icones de promoção */}
              <div
                className="flex justify-between gap-35
                w-55 min-h-7 ">
                <div>
                  <Image
                    alt="icone promoção"
                    height={7}
                    width={7}
                    src="/icons/Red Fire.svg"
                    className="w-6 h-auto"
                  />
                </div>

                <div
                  className="
              flex 
              justify-center
              gap-2 "
                >
                  <Image
                    alt="icone promoção"
                    height={7}
                    width={7}
                    src="/icons/add carrinho cinza.png"
                    className="w-6 h-6"
                  />
                  <Image
                    alt="icone promoção"
                    height={6}
                    width={6}
                    src="/icons/favoritos cinza.png"
                    className="w-6 h-6"
                  />
                </div>
              </div>
              {/* Imagem do produto */}
              <Image
                alt="Produto04"
                width={300}
                height={300}
                src="/produtos/Camisetas.png"
                className="
              h-auto w-50
              p-1
              hover:scale-105
              transition
              duration-300
              "
              />
              {/* Titulo do produto */}
              <p
                className="min-h-13
            text-left
            text-md
            font-bold"
              >
                Camiseta Red Line Oil USA - Preta
              </p>

              {/* Preço antigo */}
              <p
                className="
            w-full
            text-left
            text-sm
            font-light
            line-through
            "
              >
                R$ 449,90
              </p>

              {/* Preço atual */}
              <p
                className="
            w-full
            text-left
            text-md
            font-bold
            "
              >
                R$ 359,91
              </p>

              {/* Linha de gatilho */}
              <p
                className="w-full text-left
            text-sm
            font-light
            "
              >
                No PIX ou 10x no Crêdito
              </p>
            </div>
          </Link>

          {/* Produto lista 05*/}
          <Link href="/produto03">
            <div
              className="hidden xl:flex
          flex-col justify-center
          w-65 min-h-95 p-5
          items-center
          bg-white
          text-[#1E1E1E]
          rounded-lg

          cursor-pointer
          hover:-translate-y-1
          hover:shadow-xl
          transition"
            >
              {/* Icones de promoção */}
              <div
                className="flex justify-between gap-35
                w-55 min-h-7 ">
                <div>
                  <Image
                    alt="icone promoção"
                    height={7}
                    width={7}
                    src="/icons/Red Fire.svg"
                    className="w-6 h-auto"
                  />
                </div>

                <div
                  className="
              flex 
              justify-center
              gap-2 "
                >
                  <Image
                    alt="icone promoção"
                    height={7}
                    width={7}
                    src="/icons/add carrinho cinza.png"
                    className="w-6 h-6"
                  />
                  <Image
                    alt="icone promoção"
                    height={6}
                    width={6}
                    src="/icons/favoritos cinza.png"
                    className="w-6 h-6"
                  />
                </div>
              </div>
              {/* Imagem do produto */}
              <Image
                alt="Produto04"
                width={300}
                height={300}
                src="/produtos/Camisetas.png"
                className="
              h-auto w-50
              p-1
              hover:scale-105
              transition
              duration-300
              "
              />
              {/* Titulo do produto */}
              <p
                className="min-h-13
            text-left
            text-md
            font-bold"
              >
                Camiseta Red Line Oil USA - Preta
              </p>

              {/* Preço antigo */}
              <p
                className="
            w-full
            text-left
            text-sm
            font-light
            line-through
            "
              >
                R$ 449,90
              </p>

              {/* Preço atual */}
              <p
                className="
            w-full
            text-left
            text-md
            font-bold
            "
              >
                R$ 359,91
              </p>

              {/* Linha de gatilho */}
              <p
                className="w-full text-left
            text-sm
            font-light
            "
              >
                No PIX ou 10x no Crêdito
              </p>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}

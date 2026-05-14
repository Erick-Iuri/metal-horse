import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    /* main div */
    <div>
      {/* Barra de Navegação 🚢 */}
      <div>
        <div className="max-w-450 mx-auto flex justify-between items-center p-3">
          {/* LOGO da marca 1/3*/}
          <div>
            <img src={"/LOGO.png"} width={230} height={100} />
          </div>

          {/* BARRA DE PESQUISA 2/3*/}
          <div className="flex w-310">
            <input
              type="text"
              placeholder="Busque na Metal Horse"
              className="bg-white text-black 
              w-full h-11 p-1
              px-4 py-2
              focus:outline-none
              rounded-sm"
            />
          </div>

          {/* USER MENU 3/3 */}
          <div className="flex gap-4">
            <div className="flex gap-4">
              <img src="/icons/Ellipse.png" width={40} height={"auto"} />
              <div className="pt-2">Olá, Erick</div>
            </div>

            <div className="flex gap-4">
              <img src={"/icons/favorite.svg"} width={30} height={10} />

              <img src={"/icons/shooping cart.svg"} width={30} height={10} />
            </div>
          </div>
        </div>

        {/* Botões de ação */}
        <div className="flex justify-center items-center">
          <div className="p-3 text-lg">
            <Link
              href="/"
              className="px-8 py-1.5 bg-[#E82A25] rounded-sm font-semibold"
            >
              Conexões
            </Link>
            <Link href="/" className="px-8 py-1 mx-2 border-2 rounded-sm">
              Mangueiras
            </Link>
            <Link href="/" className="p-3">
              Radiadores
            </Link>
            <Link href="/" className="p-3">
              Proteção Térmicas
            </Link>
            <Link href="/" className="p-3">
              Escapamentos
            </Link>
            <Link href="/" className="p-3">
              Injeção
            </Link>
            <Link href="/" className="p-3">
              Filtros
            </Link>
            <Link href="/" className="p-3">
              Acessórios
            </Link>
            <Link href="/" className="p-3">
              Elétrica
            </Link>
            <Link href="/" className="p-3">
              Bancos e Cintos
            </Link>
          </div>
        </div>

        {/* Faixa vermelha */}
        <div className="bg-[#E82A25] w-full h-2 my-2"></div>
      </div>
    </div>
  );
}

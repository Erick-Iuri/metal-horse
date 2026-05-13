import Image from "next/image";

export default function Home() {
  return (
    /* main div */
    <div>
      {/* Barra de Navegação */}
      <div>
        <div className="max-w-450 mx-auto flex justify-between items-center p-5">
          <div>
            <img src={"/LOGO.png"} width={230} height={100} />
          </div>

          <div>
            <input
              type="text"
              placeholder="Busque na Metal Horse"
              className="bg-white text-black 
              w-300 h-11 p-1
              px-4 py-2
              focus:outline-none
              rounded-sm"
            />
          </div>

          <div className="flex gap-4">
            <div className="flex gap-4">
              <img src="/icons/Ellipse.png" width={40} height={"auto"} />
              <div className="pt-2">Olá, Erick</div>
            </div>

            <div className="flex gap-4">
              <img src={"/icons/favorite.svg"} 
              width={30} 
              height={10} />

              <img src={"/icons/shooping cart.svg"} 
              width={30} 
              height={10} />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

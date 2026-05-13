import Image from "next/image";

export default function Home() {
  return (
    /* main div */
    <div>
      {/* Barra de Navegação */}
      <div className="bg-red-500 ">
        <nav className="flex ">
          <div>Logo</div>
          <div>Barra de pesquisa</div>
          <div>Usuario/login</div>
        </nav>
      </div>
    </div>
  );
}

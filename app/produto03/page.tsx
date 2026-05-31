"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  // troca imagens do produto
  const imagensProduto = [
    "/produtos/Turbina 1.png", //0
    "/produtos/2.jpg", //1
    "/produtos/3.jpg", //2
    "/produtos/5.jpg", //3
  ];
  const [imagemAtual, setImagem] = useState(0);

  function carrosselProximo() {
    const posicao = imagensProduto.length - 1;
    if(imagemAtual < posicao) {
      setImagem(imagemAtual + 1);
    };
  };

  function carrosselVoltar() {
    if(imagemAtual > 0) {
      setImagem(imagemAtual - 1);
    };
  };


  return (
    /* main div */
    <div className="h-full bg-white">
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

      {/* Página de produto */}
      <div className="flex justify-center bg-white">
        <div className="max-w-360 w-360 h-auto">
          {/* Caminho do produto */}
          <p className="p-5 font-bold">
            Início - Super Core GTX3076R Gen II A/R 0.60 - 851154-5001S{" "}
          </p>

          {/* Produto/Comprar (com informações) */}
          <div className="flex flex-col justify-center pt-1 lg:flex-row">
            {/* Foto do produto 1/2 */}
            <div className="flex justify-center flex-col h-auto lg:w-2/1">
              {/* Foto do roduto (principal) */}
              <div className="flex justify-center absolute">
                {/* Imagem que está aparecendo do produto */}
                <Image
                  alt="Imagem-produto"
                  width="500"
                  height="500"
                  src={imagensProduto[imagemAtual]}
                  className="
                p-10
                w-auto h-auto"
                />

                {/* Botão vai */}
                <button 
                onClick={()=>{carrosselProximo()}}
                className="bg-red-700 h-20 w-20 relative right-30 top-90">botão vai</button>

                {/* Botão volta */}
                <button
                onClick={()=>{carrosselVoltar()}}
                className="bg-amber-400 w-20 h-20 relative right-200 top-90">botão volta</button>
              </div>

              {/* Fotos do carrocel */}
              <div className="flex justify-center items-center">
                {/* 1/5 fotos */}
                <Image
                  alt="Imagem-produto"
                  width="500"
                  height="500"
                  src="/produtos/Turbina 1.png"
                  className="w-30 h-auto p-3 
                  border-2
                  border-[#E82A25]
                  hover:border-[#E82A25]
                  cursor-pointer"
                />

                {/* 2/5 fotos */}
                <Image
                  alt="Imagem-produto"
                  width="500"
                  height="500"
                  src="/produtos/2.jpg"
                  className="w-30 h-auto p-3 
                  border-2
                  border-transparent
                  hover:scale-105
                  transition
                  duration-300
                  cursor-pointer"
                />

                {/* 3/5 fotos */}
                <Image
                  alt="Imagem-produto"
                  width="500"
                  height="500"
                  src="/produtos/3.jpg"
                  className="w-30 h-auto p-3 
                  border-2
                  border-transparent
                  hover:scale-105
                  transition
                  duration-300
                  cursor-pointer"
                />

                {/* 4/5 fotos */}
                <Image
                  alt="Imagem-produto"
                  width="500"
                  height="500"
                  src="/produtos/4.jpg"
                  className="hidden md:flex
                  w-30 h-auto p-3
                  border-2
                  border-transparent
                  hover:scale-105
                  transition
                  duration-300
                  cursor-pointer"
                />

                {/* 5/5 fotos */}
                <Image
                  alt="Imagem-produto"
                  width="500"
                  height="500"
                  src="/produtos/5.jpg"
                  className="hidden md:flex
                  w-30 h-auto p-3
                  border-2
                  border-transparent
                  hover:scale-105
                  transition
                  duration-300
                  cursor-pointer"
                />
              </div>
            </div>

            {/* Descrição e Check-in 2/2*/}
            <div className="p-10 h-auto lg:w-2/1">
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

              {/* Nome do produto */}
              <div className="flex justify-start gap-1 pt-3">
                <p className="font-bold text-xl">
                  Super Core GTX3076R Gen II A/R 0.60 - 851154-5001S - Garrett
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

              {/* Descrição do produto  */}
              <div className="flex justify-start gap-1 pt-5">
                <p className="text-md font-medium">
                  Garrett® GTX é o nome que foi pioneiro na tecnologia turbo e
                  impulsionou as equipes de corridas de arrancada e de estrada a
                  quebrar centenas de recordes mundiais. As rodas fundidas do
                  compressor apresentam aerodinâmica original da série GTX e
                  fornecem durabilidade e longevidade máximas. As opções de
                  caixa de turbina propiciam uma melhor escolha com grande
                  variedade de configurações A/R e flange. Para qualquer
                  necessidade de desempenho, os turbocompressores da série GTX
                  são uma ótima opção de custo / benefício.
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

              {/* Consultar Frete*/}
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

          {/* botões de detalhes, informações e avalizações */}
          <div className="flex justify-start gap-5 p-10 text-lg">
            {/* Botão Detalhes 1/3 */}
            <div>
              <button
                className="
              cursor-pointer
              font-bold 
              underline 
              decoration-2 
              underline-offset-10"
              >
                Detalhes
              </button>
            </div>

            {/* Botão Informações 2/3 */}
            <div>
              <button
                className="
              cursor-pointer"
              >
                Informações
              </button>
            </div>

            {/* Botão Avaliações 3/3 */}
            <div>
              <button
                className="
              cursor-pointer"
              >
                Avaliações
              </button>
            </div>
          </div>

          {/* Titulo 01 */}
          <div className="p-10">
            <h2 className="font-bold">
              Super Core G25-550 A/R 0.70 - 858161-5002S - Garrett
            </h2>

            <p className="pt-5">
              Redesenhados para extrair o máximo de desempenho possível, os
              novos rotores da Linha G proporcionam maior fluxo de ar por faixa
              de pressão, extraindo mais potência em relação as linhas
              anteriores, otimizando sua faixa de eficiência. A linha G Series
              conta com diversas opções de caixa quente, todas em aço inox,
              disponíveis nas versões com/sem Wastegate integrada, que suportam
              temperaturas de até 1050°C
            </p>

            <h2 className="pt-5 font-bold">Diferenciais G Series</h2>

            <p className="pt-5">
              Esse produto foi desenvolvido para uso profissional, sua má
              instalação/utilização pode acarretar graves danos ao mesmo e
              outras partes do veículo. Seu manuseio deve ser feito por
              profissionais qualificados, se você não é, por favor procure um.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

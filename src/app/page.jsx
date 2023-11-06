"use client";
import { CardItems } from "./components/card";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";
import { motion } from 'framer-motion'
import {
  BiLogoReact,
  BiLogoSass,
  BiLogoFirebase,
  BiLogoFigma,
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiDownload,
  BiLogoGithub,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { SiStyledcomponents, SiNextdotjs, SiExpress } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { TbBrandReactNative } from "react-icons/tb";
import { FiFigma } from "react-icons/fi";
export default function Home() {
  function contarMesesAteAgora() {
    // Crie uma data para maio de 2023
    const dataMaio2023 = new Date(2023, 4, 1); // Lembre-se de que os meses são zero indexados, então maio é representado pelo número 4.
  
    // Obtenha a data atual
    const dataAtual = new Date();
  
    // Calcule a diferença em meses
    const diferencaEmMeses = (dataAtual.getFullYear() - dataMaio2023.getFullYear()) * 12 + (dataAtual.getMonth() - dataMaio2023.getMonth());
  
    return diferencaEmMeses;
  }
  const especialidades = [
    {
      Nome: "Express",
      Icone: <SiExpress />,
      Tempo: 2,
    },
    {
      Nome: "Figma",
      Icone: <BiLogoFigma />,
      Tempo: 2,
    },
    {
      Nome: "Firebase",
      Icone: <BiLogoFirebase />,
      Tempo: 2,
    },
    {
      Nome: "Next",
      Icone: <SiNextdotjs />,
      Tempo: 1,
    },
    {
      Nome: "Native",
      Icone: <TbBrandReactNative />,
      Tempo: 1,
    },
    {
      Nome: "React",
      Icone: <BiLogoReact />,
      Tempo: 2,
    },
    {
      Nome: "Sass",
      Icone: <BiLogoSass />,
      Tempo: 2,
    },
    {
      Nome: "Style C",
      Icone: <SiStyledcomponents />,
      Tempo: 1,
    },
    {
      Nome: "Tailwind",
      Icone: <BiLogoTailwindCss />,
      Tempo: 1,
    },
    {
      Nome: "Type",
      Icone: <BiLogoTypescript />,
      Tempo: 1,
    },
  ];
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <main className="bg-white overflow-x-hidden max-w-full" data-aos="fade-up">
      <motion.div className="flex justify-center items-center flex-col md:h-screen h-80" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <h2 className="md:text-6xl text-3xl font-semibold">
          Olá, Me Chamo Rafael{" "}
        </h2>
        <h3 className="md:text-6xl text-2xl md:pl-24">
          Sou <span className="text-gray-600">Front-end Developer</span>
        </h3>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="md:p-24" data-aos="fade-up">
        <h1 className="md:text-[44px] font-bold text-center text-3xl mb-10 ">Sobre</h1>
        <p className="md:text-[32px] font-light text-justify p-4">
          Sou estudante de Análise e Desenvolvimento de Sistemas na Faculdade
          Eduvale, localizada em Avaré, no interior de São Paulo. Estudo
          programação há 2 anos e estou atuando profissionalmente como
          desenvolvedor web há {contarMesesAteAgora()} meses. Tenho colaborado em diversos projetos no
          GitHub, tanto em projetos pessoais quanto para ajudar colegas.
        </p>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className=" py-24 flex justify-between items-center flex-col">
        <h3 className="md:text-[44px] font-bold text-center text-3xl mb-10">Skills</h3>
        <div className="md:grid md:grid-cols-3 md:gap-32 md:w-[80] md:mt-20 flex flex-col gap-4">
          {especialidades.map((item, index) => (
            <Card
              shadow="lg"
              key={index}
              className="border-2 border-gray-100 shadow-gray-100 rounded-sm shadow-xl w-44 h-44   "
            >
              <CardBody className="overflow-visible ml-4">
                <p className="w-full text-8xl">{item.Icone}</p>
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>{item.Nome}</b>
                <p className="text-default-500">
                  {item.Tempo} {item.Tempo === 1 ? "ano" : "anos"}
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </motion.div>
      <motion.div className="" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <h3 className="md:text-[44px] font-bold text-center text-3xl mb-10">Projetos</h3>
        <div className="flex justify-center items-center">
          <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100 w-32 md:block hidden' onClick={slideLeft} size={40} />
          <div id="slider" className=" w-full md:h-full h-96 overflow-auto md:flex overflow-x-scroll scroll whitespace-nowrap scroll-smooth [&::-webkit-scrollbar]:hidden">
            <CardItems />
          </div>
          <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100 w-32 md:block hidden' onClick={slideRight} size={40} />
        </div>
      </motion.div>
      <section className="md:grid md:grid-cols-2 mt-8 mb-10" data-aos="fade-up">
        <div className="flex flex-col justify-center items-center mb-10">
          <h3 className="md:text-5xl text-3xl font-bold text-center md:mb-10">Curriculo</h3>
          <p className="text-5xl text-center cursor-pointer" >
            <BiDownload />
          </p>
        </div>
        <div className="flex justify-center flex-col items-center">
          <h3 className="md:text-5xl text-3xl font-bold text-center md:mb-10 mb-6">Links</h3>
          <div className="flex gap-8 flex-col md:flex-row">
            <a
              href="https://github.com/Rafaelpavanelli"
              className="text-3xl text-center flex flex-col  items-center"
            >
              <BiLogoGithub /> Github
            </a>
            <a
              href="https://www.linkedin.com/in/rafael-pavanelli-59807a1a4/"
              className="text-3xl text-center flex flex-col  items-center"
            >
              <BiLogoLinkedinSquare /> Linkedin
            </a>
            <a
              href="mailto:gvxvvfbgx@gmail.com?subject=&body="
              className="text-3xl text-center flex flex-col  items-center"
            >
              <AiOutlineMail /> Gmail
            </a>
          </div>
        </div>
      </section>
      <section className="flex justify-between items-center px-24 py-10 w-full flex-wrap">
        <Link href={"https://www.figma.com/file/jMkMlRb0tuXLjsWrQOiCQj/Portif%C3%B3lio?type=design&node-id=0%3A1&mode=design&t=tKMg2yIodwbKW0rK-1"} className="flex justify-center items-center flex-col cursor-pointer">
          <FiFigma className="text-6xl" />
          <p>Figma do projeto</p>

        </Link>
        <Link href={"https://github.com/Rafaelpavanelli/portifolionew"} className="flex justify-center items-center flex-col cursor-pointer">
          <BiLogoGithub className="text-6xl" />
          <p>Codigo do projeto</p>
        </Link>
      </section>
    </main>
  );
}

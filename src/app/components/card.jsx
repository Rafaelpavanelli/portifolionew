'use client'
import React, { useState } from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  CardHeader,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import Items from '../data.json';
import { FiGithub } from 'react-icons/fi';

export const CardItems = () => {
  const [Data, setData] = useState(Items);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (data) => {
    setSelectedProject(data);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return Data.Projetos.map((data, index) => {
    return (
      <div key={index}>
        <Card className="py-4 shadow-lg w-[300px] h-[316px] m-4 border-2 border-gray-100 rounded-sm">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">{data.Nome}</p>
            <small className="text-default-500">{data.Linguagens}</small>
            <h4 className="font-bold text-large">{data.Plataforma}</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2 w-full h-full">
            <Image
              src={data.Background}
              alt="Imagem front"
              height={36}
              className="rounded-xl col-span-2 "
            />
          </CardBody>
          <CardFooter>
            <p
              className="cursor-pointer hover:border-b-2 hover:border-black border-b-2 border-transparent transition-all duration-300"
              onClick={() => openModal(data)}
            >
              Ver mais
            </p>
          </CardFooter>
        </Card>
        <Modal isOpen={!!selectedProject} onClose={closeModal} size="3xl" className="bg-gray-800 text-white rounded-xl">
      <ModalContent>
        {selectedProject && (
          <>
            <ModalHeader className="flex flex-col gap-1 text-center text-2xl">
              {selectedProject.Nome}
            </ModalHeader>
            <ModalBody className="md:grid md:grid-cols-2">
              <div className="col-span-2">
                <Image
                  src={selectedProject.Background}
                  alt="Imagem front"
                  height={500}
                  className="rounded-xl col-span-2"
                />
              </div>
              <p className="col-span-2">
                {selectedProject.Description}
              </p>
              <div className="">
                <p className="">Linguagens</p>
                <p className="text-gray-300">{selectedProject.Linguagem}</p>
              </div>
              <div className="">
                <p className="text-xl">Links</p>
                <a href={selectedProject.Github} className="w-8 text-2xl"><FiGithub /></a>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onClick={closeModal}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
      </div>
    );
  }) }
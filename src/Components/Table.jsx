import React from "react";

const Table = () => {
  return (
    <div className="flex p-10 shadow-2xl bg-white rounded-2xl w-[66rem] m-auto mt-10">
      <div className="">
        <div className="flex ">
          <p className="text-xl font-bold ">Descrição</p>
          <p className="text-xl font-bold ml-[20rem]">Valor</p>
          <p className="text-xl font-bold ml-[22rem]">Tipo</p>
        </div>

        <div className="w-[60rem] h-[1px] bg-[#000] mt-[5px]"></div>
        <div className="flex mt-[5px]">
          <p className="">Salário</p>
          <p className="ml-[22rem]">R$ 1500</p>
          <img
            src="./assets/arrowDown.png"
            alt="seta pra cima"
            className="max-h-[25px] max-w-[25px] ml-[22rem]"
          />
          <img
            src="./assets/bin.png"
            alt="lixeira"
            className="max-h-[25px] max-w-[25px] ml-[5rem] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Table;

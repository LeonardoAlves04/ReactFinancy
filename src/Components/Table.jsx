import React from "react";

const Table = ({ itens, onDelete }) => {
  return (
    <div className="flex p-10 shadow-2xl bg-white rounded-2xl w-[66rem] m-auto mt-10">
      <div className="">
        <div className="flex">
          <p className="text-xl font-bold ">Descrição</p>
          <p className="text-xl font-bold ml-[20rem]">Valor</p>
          <p className="text-xl font-bold ml-[22rem]">Tipo</p>
        </div>

        <div className="w-[60rem] h-[1px] bg-[#000] mt-[5px]"></div>
        <div className="flex mt-[5px] space-x-20 ">
          <div className="">
            <h1 className="max-w-[5rem]">Descrição</h1>
          </div>

          <div>
            <h1 className="ml-[16rem]">R$ 1500</h1>
          </div>

          <div className="">
            {itens.expense ? (
              <img
                src="./assets/arrowDown.png"
                alt="seta pra cima"
                className="max-h-[25px] max-w-[25px] ml-[10rem]"
              />
            ) : (
              <img
                src="./assets/arrowUp.png"
                alt="seta pra cima"
                className="max-h-[25px] max-w-[25px] ml-[14rem] "
              />
            )}
          </div>

          <div className="">
            <img
              src="./assets/bin.png"
              alt="lixeira"
              className="max-h-[25px] max-w-[25px] ml-[5rem] cursor-pointer"
              onClick={() => onDelete(itens.id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;

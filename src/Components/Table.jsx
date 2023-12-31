import React from "react";
import TableItem from "./TableItem";

const Table = ({ itens, setItens }) => {
  const onDelete = (ID) => {
    const newArray = itens.filter((transaction) => transaction.id !== ID);
    setItens(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };

  return (
    <div className="flex p-8 shadow-2xl rounded-sm bg-greyPrimary  m-auto mt-[20px]">
      <div className="">
        <div className="flex ">
          <p className="text-xl font-bold">Descrição</p>
          <p className="text-xl font-bold ml-[25rem]">Valor</p>
          <p className="text-xl font-bold ml-[15rem]">Tipo</p>
        </div>
        <div className="w-[58rem] h-[1px] bg-[#000] mt-[5px] "></div>
        <div>
          {itens?.map((item, index) => (
            <TableItem key={index} item={item} onDelete={onDelete} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Table;

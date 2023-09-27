import React from "react";

const TableItem = ({ item, onDelete }) => {
  return (
    <div>
      <div className="flex mt-[5px] space-x-20 ">
        <div className="">
          <h1 className="max-w-[5rem]">{item.desc}</h1>
        </div>

        <div>
          <h1 className="ml-[16rem] mr-[16rem]">{item.amount}</h1>
        </div>

        {item.expense ? (
          <img
            src="./assets/arrowDown.png"
            alt="seta pra cima"
            className="max-h-[25px] max-w-[25px]"
          />
        ) : (
          <img
            src="./assets/arrowUp.png"
            alt="seta pra cima"
            className="max-h-[25px] max-w-[25px] ml-20"
          />
        )}

        <div className="">
          <img
            src="./assets/bin.png"
            alt="lixeira"
            className="max-h-[25px] max-w-[25px] cursor-pointer"
            onClick={() => onDelete(item.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default TableItem;

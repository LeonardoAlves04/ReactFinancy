import React from "react";

const TableItem = ({ item, onDelete }) => {
  return (
    <div>
      <div className="flex mt-[5px]">
        <div className="">
          <h1 className="w-[10rem]">{item.desc}</h1>
        </div>

        <div className="m-auto ">
          <h1>{item.amount}</h1>
        </div>

        {item.expense ? (
          <img
            src="./assets/arrowDown.png"
            alt="seta pra cima"
            className="h-[25px] w-[25px]"
          />
        ) : (
          <img
            src="./assets/arrowUp.png"
            alt="seta pra cima"
            className="h-[25px] w-[25px]"
          />
        )}

        <div className="">
          <img
            src="./assets/bin.png"
            alt="lixeira"
            className="h-[25px] w-[25px] cursor-pointer ml-[90px]"
            onClick={() => onDelete(item.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default TableItem;

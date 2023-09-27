import React from "react";
import { FaDollarSign } from "react-icons/fa";

const Container = ({ income, expense, total }) => {
  return (
    <div className="flex justify-center space-x-20">
      <div className="p-5 shadow-2xl rounded-lg mt-5 w-[300px] h-[150px] text-center bg-white">
        <img
          src="./assets/arrowUp.png"
          alt="arrowUp"
          className="m-auto text-xl h-[30px]"
        />

        <h1 className="font-bold text-2xl mt-[1rem]">
          Entrada: <br />
          <span className="text-xl"> {income}</span>
        </h1>
      </div>
      <div className="p-5 shadow-2xl rounded-lg mt-5 min-w-[300px] text-center bg-white">
        <img
          src="./assets/arrowDown.png"
          alt="arrowDown"
          className="m-auto text-xl h-[30px]"
        />
        <h1 className="font-bold text-2xl  mt-[1rem]">
          Saída: <br />
          <span className="text-xl">{expense}</span>
        </h1>
      </div>
      <div className="p-5 shadow-2xl rounded-lg mt-5 min-w-[300px] text-center bg-white">
        <FaDollarSign className="m-auto mb-[10px]  text-2xl" />
        <h1 className="font-bold text-2xl  mt-[1rem] ">
          Saldo: <br />
          <span className="text-xl "> {total}</span>
        </h1>
      </div>
    </div>
  );
};

export default Container;

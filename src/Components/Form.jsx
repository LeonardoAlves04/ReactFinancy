import { React, useState } from "react";
import Table from "./Table";

const Input = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);

  const generateID = () => Math.round(Math.random() * 1000);

  const handleVerification = () => {
    if (!desc || !amount) {
      alert("Você precisa informar a descrição e o valor");
    } else if (amount < 1) {
      alert("O valor tem que ser maior que 1 tião!");
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense,
    };

    handleAdd(transaction);

    setDesc("");
    setAmount("");
  };

  return (
    <div className="flex p-5 justify-center shadow-2xl rounded-2xl w-[66rem] m-auto mt-10 bg-white ">
      <div className="">
        <div className="flex space-x-[13rem]">
          <p className="text-xl font-bold">Descrição</p>
          <p className="text-xl font-bold">Valor</p>
        </div>
        <div className="space-x-[4rem]">
          <input
            type="text"
            name="descrição"
            value={desc}
            className="w-[15rem] border-2"
            onChange={(e) => setDesc(e.target.value)}
            maxLength={25}
            required
          />
          <input
            type="number"
            value={amount}
            className="w-[15rem] border-2 appearance-none"
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            type="radio"
            defaultChecked
            name="opção"
            onChange={() => setExpense(!isExpense)}
          />
          Entrada
          <input
            type="radio"
            name="opção"
            onChange={() => setExpense(!isExpense)}
          />
          Saída
          <button
            className="bg-cyanPrimary p-2 rounded"
            onClick={handleVerification}
          >
            Adicionar
          </button>
        </div>
        <Table itens={transactionsList} setItens={setTransactionsList} />
      </div>
    </div>
  );
};

export default Input;

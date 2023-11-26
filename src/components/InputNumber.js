import React from "react";
import { useContextNumber } from "../context/gen.context";

const InputNumber = () => {
  const { generateNumber } = useContextNumber();
  return (
    <>
      <div className="">
        <h1 className="text-success">Generate Otp</h1>
        <button className="btn btn-primary " onClick={generateNumber}>
          Gentrate Now
        </button>
      </div>
    </>
  );
};

export default InputNumber;

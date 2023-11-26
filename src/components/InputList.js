import React from "react";
import { useContextNumber } from "../context/gen.context";

const InputList = () => {
  const { number } = useContextNumber();
  console.log(number);
  return (
    <>
      {
        <div>
          <ul className="list-group rounded-0 col-4 mx-auto mt-2">
            {number.map((number, i) => {
              return (
                <li
                  className="list-group-item  m-1 rounded-2 text-bg-dark "
                  key={i}
                >
                  {number}
                </li>
              );
            })}
          </ul>
        </div>
      }
    </>
  );
};

export default InputList;

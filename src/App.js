import React from "react";
import InputNumber from "./components/InputNumber";
import InputList from "./components/InputList";
import "./App.css";

const App = () => {
  return (
    <>
      <section className="container mx-auto text-center mt-4">
        <InputNumber />
        <InputList />
      </section>
    </>
  );
};

export default App;

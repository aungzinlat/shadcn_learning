import React from "react";
import { CardComponents } from "./components";
import HomePage from "./page/Home.page";

const App = () => {
  return (
    <div className=" container mx-auto px-20 py-5">
      <h1 className=" font-bold text-7xl mb-10">Recipes</h1>
      <HomePage />
    </div>
  );
};

export default App;

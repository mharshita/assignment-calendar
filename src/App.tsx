import React from "react";
import Card from "./components/Card";

const App: React.FC = () => {
  return (
    <div className="bg-blue-400 text-center h-[100vh] flex flex-col items-center justify-center">
      <Card />
    </div>
  );
};

export default App;

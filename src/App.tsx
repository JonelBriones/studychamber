import { useState } from "react";
import { Button } from "./components/Buttons";
import { Modes } from "./components/Modes";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Footer from "./components/Footer";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="w-lg m-auto p-4">
      <Header />
      <div className="m-auto flex flex-col gap-4">
        <Timer />
        <div className="flex flex-col gap-4">
          <div className="border-b border-b-horizon-haze-300 flex justify-between items-center">
            <span className="text-sm">Tasks</span>
            <button>...</button>
          </div>
          <TaskList />
          <TaskForm />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

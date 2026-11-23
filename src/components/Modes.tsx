import { useState } from "react";

export function Modes() {
  const [mode, setMode] = useState<String>("Pomodoro");
  const modes = ["Pomodoro", "Short Break", "Long Break"];

  function onChangeMode(mode: String) {
    setMode(mode);
  }

  return (
    <div className="flex gap-4">
      {modes.map((m) => (
        <button
          key={m}
          onClick={() => onChangeMode(m)}
          className={`text-xs font-semibold  py-0.5 px-2 rounded-sm cursor-pointer ${(mode === m && "bg-emerald-800") || (mode !== m && "hover:bg-emerald-700")}`}
        >
          {m}
        </button>
      ))}
    </div>
  );
}

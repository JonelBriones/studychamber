import React, { useEffect, useState } from "react";

export default function Timer() {
  const [mode, setMode] = useState<String>("Pomodoro");
  const modes = ["Pomodoro", "Short Break", "Long Break"];
  const minutesToSeconds = 25 * 60 * 1000;
  const [timer, setTimer] = useState(minutesToSeconds);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    if (timer <= 0) {
      setMode(modes[1]);
      setIsRunning(false);
    }

    const timerId = setTimeout(() => {
      setTimer((p) => p - 1000);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [isRunning, timer]);

  function start() {
    !isRunning ? setIsRunning(true) : setIsRunning(false);
  }
  function reset() {}

  function formatTime() {
    let minutes = Math.floor((timer / (1000 * 60)) % 60).toString();
    let seconds = Math.floor((timer / 1000) % 60).toString();

    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    return `${minutes}:${seconds}`;
  }

  function onChangeMode(mode: String) {
    setMode(mode);
  }

  return (
    <div className="py-4 gap-4 flex flex-col items-center rounded-sm">
      <div className="flex gap-4">
        {modes.map((m) => (
          <button
            key={m}
            onClick={() => onChangeMode(m)}
            className={`font-semibold  p-2 rounded-sm cursor-pointer ${(mode === m && "bg-horizon-haze-300") || (mode !== m && "hover:bg-horizon-haze-200")}`}
          >
            {m}
          </button>
        ))}
      </div>
      <span className="text-9xl font-bold tabular-nums font-timer">
        {formatTime()}
      </span>
      <button
        onClick={start}
        className="text-endless-white-100 bg-hourglass-green-700 rounded-sm w-30 text-2xl font-bold uppercase tracking-wider py-1 cursor-pointer"
      >
        {!isRunning ? "Start" : "Pause"}
      </button>
    </div>
  );
}

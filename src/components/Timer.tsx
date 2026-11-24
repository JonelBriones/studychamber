import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Timer() {
  const [minutes, setMinutes] = useState<number>(25);
  const [timer, setTimer] = useState(minutes * 60 * 1000);
  const [isRunning, setIsRunning] = useState(false);
  const modes: Variant[] = ["Focus", "Short Break", "Long Break"];
  const [mode, setMode] = useState<Variant>("Focus");
  type Variant = "Focus" | "Short Break" | "Long Break";

  function getVariantStyle(variant: Variant) {
    switch (variant) {
      case "Focus":
        return "bg-roof-pink-300";
      case "Short Break":
        return "bg-marble-blue-300";
      case "Long Break":
        return "bg-pillar-periwinkle-400";
      default:
        throw new Error(`Invalid variant: ${variant satisfies never}`);
    }
  }

  useEffect(() => {
    setTimer(minutes * 60 * 1000);
  }, [minutes]);

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

  function formatTime() {
    let minutesFormatter = Math.floor((timer / (1000 * 60)) % 125).toString();
    let secondsFormatter = Math.floor((timer / 1000) % 60).toString();

    minutesFormatter = String(minutesFormatter).padStart(2, "0");
    secondsFormatter = String(secondsFormatter).padStart(2, "0");
    return `${minutesFormatter}:${secondsFormatter}`;
  }

  function onChangeMode(mode: Variant) {
    setIsRunning(false);
    if (mode === "Focus") {
      setTimer(minutes * 60 * 1000);
    } else if (mode === "Short Break") {
      setTimer(5 * 60 * 1000);
    } else {
      setTimer(15 * 60 * 1000);
    }
    setMode(mode);
  }

  return (
    <div className="py-4 gap-4 flex flex-col items-center rounded-sm">
      {mode === "Focus" && (
        <div className="flex items-center justify-between w-fit border rounded-full">
          <button
            onClick={() => {
              setMinutes((prev) => prev - 5);
            }}
            disabled={minutes === 5}
            className="w-10 h-10 rounded-full hover:bg-endless-white-200 transition-colors cursor-pointer"
          >
            -
          </button>
          <span className="">
            <span className="text-lg font-bold">{minutes}</span> min
          </span>
          <button
            onClick={() => {
              setMinutes((prev) => prev + 5);
            }}
            disabled={minutes === 120}
            className="w-10 h-10 rounded-full hover:bg-endless-white-200 transition-colors cursor-pointer"
          >
            +
          </button>
        </div>
      )}
      <div className="flex gap-4">
        {modes.map((m) => (
          <button
            key={m}
            onClick={() => onChangeMode(m)}
            className={twMerge(
              getVariantStyle(m),
              `font-semibold p-2 rounded-sm cursor-pointer ${mode !== m && "bg-endless-white-100"}`,
            )}
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
        className="text-endless-white-100 bg-hourglass-green-600 rounded-sm w-30 text-2xl font-bold uppercase tracking-wider py-1 cursor-pointer"
      >
        {!isRunning ? "Start" : "Pause"}
      </button>
    </div>
  );
}

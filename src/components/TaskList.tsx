import React from "react";

export default function TaskList() {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <button>✅</button>
        <span>Math</span>
      </div>
      <div className="flex gap-2 items-center">
        <span className="text-xs">0/1</span>
        <button>...</button>
      </div>
    </div>
  );
}

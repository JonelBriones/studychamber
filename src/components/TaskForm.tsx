import React from "react";

export default function TaskForm() {
  return (
    <form className="p-2">
      <input
        type="text"
        placeholder="+ Add Task"
        className="text-sm font-semibold w-full text-center outline-none"
      />
    </form>
  );
}

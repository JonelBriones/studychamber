import React, { useEffect, useState } from "react";

export default function TaskList() {
  const tasksData = [
    {
      id: "t1",
      name: "Review pointers and references",
      subject: "C++",
      topic: "Pointers",
      dateCreated: "2026-11-20T18:30:00Z",
      duration: 50,
      durationSpent: 25,
      completed: false,
      completedAt: null,
      pomodorosCompleted: 1,
      active: false,
      notes: "Redo the practice problems from chapter 9",
    },
    {
      id: "t2",
      name: "Read chapter 4",
      subject: "English",
      topic: "Rhetorical Analysis",
      dateCreated: "2026-11-21T02:15:00Z",
      duration: 25,
      durationSpent: 0,
      pomodorosCompleted: 2,
      active: false,
      completed: false,
      completedAt: null,
      notes: "",
    },
    {
      id: "t3",
      name: "Finish problem set 6",
      subject: "Math",
      topic: "Systems of Equations",
      dateCreated: "2026-11-18T17:00:00Z",
      duration: 75,
      durationSpent: 100,
      active: true,
      completed: true,
      pomodorosCompleted: 4,
      completedAt: "2026-11-21T22:10:00Z",
      notes: "Took longer than planned",
    },
  ];
  const [tasks, setTasks] = useState(tasksData);
  function onComplete(task: any) {
    const selectTask = tasks.find((prev) => prev.id == task.id);
  }

  return (
    <div className="flexg justify-between">
      <div className="flex flex-col gap-4 border">
        {tasks.map((t) => (
          <div key={t.id} className="flex justify-between p-4">
            <div className="flex items-center gap-4">
              <button className="border rounded-full w-6 h-6 opacity-50 hover:opacity-100 transition-opacity cursor-pointer" />
              <div className="flex flex-col">
                <span className="font-semibold">{t.name}</span>
                <span className="text-sm">
                  {t.name} • {t.duration}
                </span>
              </div>
            </div>
            <div>
              <button>{t.active ? "Active" : "Select"}</button>
              <button>delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

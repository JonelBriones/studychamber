import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-center gap-4 items-center p-4 border-b border-b-horizon-haze-300">
      <span className="text-md">
        Pomos: <span className="font-semibold">0/2</span>
      </span>
      <span className="text-md">
        Finish at: <span className="font-semibold">"estimated time"</span>
      </span>
    </div>
  );
}

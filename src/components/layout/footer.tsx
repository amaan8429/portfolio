"use client";

import { LastUpdated } from "@/lib/api/github";
import React from "react";

export default function Footer() {
  const [lastUpdated, setLastUpdated] = React.useState<string | null>(null);

  React.useEffect(() => {
    LastUpdated().then((res) => setLastUpdated(res));
  });
  return (
    <div className="flex flex-row w-full border-t-2 grid-cols-2 py-4 ">
      <div className="font-medium col-span-1 w-1/2">
        Last updated {lastUpdated ? lastUpdated : "Loading..."}
      </div>
      <div className="flex justify-end gap-4 w-1/2">
        <a target="_blank" href="https://x.com/amaan8429">
          Say hi on twitter
        </a>
      </div>
    </div>
  );
}

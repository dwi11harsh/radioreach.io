"use client"
import { DatePickerDemo } from "@repo/shadcn";
import { StaticBar, Topbar } from "@repo/ui";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-inherit dark:bg-inherit">
      <Topbar />
      <StaticBar />
      <div className="flex justify-between">
        <div>
          
        </div>
        <div></div>
      </div>
    </main>
  );
}

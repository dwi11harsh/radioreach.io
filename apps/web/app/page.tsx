import Image from "next/image";
import { Button } from "@repo/ui";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between p-24 bg-blue-800 dark:bg-red-950">
      <Button />
    </main>
  );
}

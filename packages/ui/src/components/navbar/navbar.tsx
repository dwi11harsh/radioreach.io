import Image from "next/image";
import { LogoutButton, ThemeSwitch } from "@repo/ui";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between min-w-full sticky top-0 z-50 bg-slate-100 dark:bg-slate-950 shadow-xl dark:shadow-xl">
      <div className="flex items-center justify-center m-3">
        <Image
          src="/musicmonitor.svg"
          alt="Music Monitor"
          width={300}
          height={100}
          className="flex-shrink-0"
        />
      </div>
      <div className="flex items-center justify-between m-3">
        <div className="ml-1 mr-2">
          <LogoutButton />
        </div>
        <div className="mx-1">
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
};

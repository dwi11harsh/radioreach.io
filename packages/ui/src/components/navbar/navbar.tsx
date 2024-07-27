import Image from "next/image";
import { LogoutButton, ThemeSwitch } from "@repo/ui";

export const Navbar = () => {
  const currentChannel:string = "the toon - newcastle and gateshed multiplex"
  return (
    <nav className="flex items-center justify-between min-w-full sticky top-0 z-50 bg-inherit dark:bg-inherit">
      <div className="flex items-center justify-center m-3">
        {/* TODO: export actual svg later */}
        {/* <Image
          src="/musicmonitor.svg"
          alt="Music Monitor"
          width={300}
          height={100}
          className="flex-shrink-0"
        /> */}
      </div>
      <div>
        <div className="mt-1 sm:text-lg text-base uppercase font-light  border-2 border-slate-300 text-slate-600 py-2 px-5 rounded-full">{currentChannel}</div>
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

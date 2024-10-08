"use client";

import Image from "next/image";
import { Drawer } from "vaul";
import {
  MoreInformationReceiverData,
  drawerState as currentDrawerState,
  getCurrentTableState,
} from "@repo/ui";
import { useRecoilState, useRecoilValue } from "recoil";

export const DrawerComponent = () => {
  const [drawerState, setDrawerState] = useRecoilState(currentDrawerState);
  return (
    <main
      className={
        "z-[100] fixed overflow-hidden bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (drawerState
          ? "transition-opacity opacity-100 duration-500 translate-x-0 "
          : "transition-all delay-500 opacity-0 translate-x-full ")
      }
    >
      <section
        className={
          "sm:w-1/3  w-1/2 right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform " +
          (drawerState ? "translate-x-0 " : "translate-x-full ")
        }
      >
        <article className="relative w-screen pb-10 bg-gray-200 dark:bg-slate-700 flex flex-col space-y-6 overflow-y-scroll h-full">
          <div className="w-64 sm:w-full flex flex-col">
            <div className="">
              <RequiredComponent />
            </div>
          </div>
        </article>
      </section>
      <section
        className="w-screen h-full cursor-pointer"
        onClick={() => {
          setDrawerState(false);
        }}
      />
    </main>
  );
};

const RequiredComponent = () => {
  const currTable = useRecoilValue(getCurrentTableState);

  if (currTable === "Receiver Data") {
    return <ReceiverData />;
  } else if (currTable === "Play Log") {
    return <PlayLogData />;
  }
};

const PlayLogData = () => {
  return (
    <div className="w-96 ml-10 mt-28 flex items-center justify-center flex-col">
      <div className="w-96 border border-slate-500 rounded-xl p-4 pl-6">
        <div>
          <div className="text-3xl text-center font-medium text-slate-700 dark:text-slate-400 m-1">
            Download Play Logs
          </div>
          <div className="border border-slate-500 rounded-xl p-2 mt-4 mb-2 text-center text-lg dark:text-slate-400 text-slate-700">
            OFCOM 42-day Compliance Report
          </div>
        </div>
        <div>
          <div className="py-4 pl-4 dark:text-slate-400 text-slate-700">
            <span>Start Date : 22/04/2024</span>
          </div>
        </div>
        <div className="border border-slate-500 rounded-xl p-2 mt-4 mb-2 text-center text-lg dark:text-slate-400 text-slate-700">
          Customised Report
        </div>
        <div>
          <div className="py-4 pl-4 dark:text-slate-400 text-slate-700">
            <span>Date Range : 23/03/2024 to 22/04/2024</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ReceiverData = () => {
  return (
    <div className="w-fit flex items-center justify-center flex-col">
      <div className="border mr-3 mt-10 rounded-2xl dark:text-slate-400 border-slate-500 w-fit">
        <p className="py-3 px-12  text-slate-600 dark:text-slate-400">
          Total Audience - 23937
        </p>
      </div>
      <div className="ml-3">
        <MapForReceiverData />
      </div>
      <div className="border mr-3 mt-3 rounded-2xl dark:text-slate-400 border-slate-500 w-fit">
        <p className="py-3 px-12 text-slate-600 dark:text-slate-400">
          NTM - 017
        </p>
      </div>
      <MoreInformationReceiverData />
    </div>
  );
};

const MapForReceiverData = () => {
  return (
    <div className="sm:m-10">
      <Image src="/map-svg.svg" alt="Google Maps" width={400} height={800} />
    </div>
  );
};

// const TotalAudience = () => {
//   return (

//   );
// };

export function DrawerComponentForLater() {
  const [drawerState, setDrawerState] = useRecoilState(currentDrawerState);

  return (
    <Drawer.Root open={drawerState} direction="right" handleOnly>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-gray-100 flex rounded-t-[10px]  ml-24  fixed bottom-0 top-0 right-0">
          <div className="p-4 bg-gray-100 border-t border-gray-200 mt-auto">
            <div className="flex gap-6 justify-end max-w-md mx-auto">
              <a
                className="text-xs text-gray-600 flex items-center gap-0.25"
                href="https://github.com/emilkowalski/vaul"
                target="_blank"
              >
                GitHub
                <svg
                  fill="none"
                  height="16"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="16"
                  aria-hidden="true"
                  className="w-3 h-3 ml-1"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14L21 3"></path>
                </svg>
              </a>
              <a
                className="text-xs text-gray-600 flex items-center gap-0.25"
                href="https://twitter.com/emilkowalski_"
                target="_blank"
              >
                Twitter
                <svg
                  fill="none"
                  height="16"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="16"
                  aria-hidden="true"
                  className="w-3 h-3 ml-1"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14L21 3"></path>
                </svg>
              </a>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

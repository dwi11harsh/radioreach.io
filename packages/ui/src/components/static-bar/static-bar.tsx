"use client"

import { useRecoilValue } from "recoil";
import { Clock } from "./clock";
import { getCurrentTableState } from "../../store";


export const StaticBar = () => {
    const currentTable = useRecoilValue(getCurrentTableState)
  return (
    <div className="border m-4 w-full flex justify-center my-2 rounded-full">
      <p className=" font-light text-gray-500 py-1 px-4">
        {currentTable} {" "}- Radio Reach Network - United Kingdom -{" "}
        <Clock />
      </p>
    </div>
  );
};
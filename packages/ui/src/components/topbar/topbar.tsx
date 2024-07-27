"use client"
import { useRecoilState } from "recoil";
import { currentTableState } from "@repo/ui";
import {cn} from "@repo/shadcn"

export const Topbar = () => {
    const [currentTable, setCurrentTable] = useRecoilState(currentTableState)
    return (
        <div className="flex justify-between m-3">
            <button onClick={()=>setCurrentTable("Receiver Data")} className={cn("m-2 border border-slate-500 dark:border-slate-500 flex-auto w-auto px-3 py-2 text-xl font-light rounded-full",currentTable == "Receiver Data" ? "ring-4 ring-pink-800 dark:ring-slate-400 border-0" : "")}>Receiver Data</button>
            <button onClick={()=>setCurrentTable("Play Log")} className={cn("m-2 border border-slate-500 dark:border-slate-500 flex-auto w-auto px-3 py-2 text-xl font-light rounded-full",currentTable == "Play Log" ? "ring-4 ring-pink-800 dark:ring-slate-400 border-0" : "")}>Play Log</button>
            <button onClick={()=>setCurrentTable("Audience Data")} className={cn("m-2 border border-slate-500 dark:border-slate-500 flex-auto w-auto px-3 py-2 text-xl font-light rounded-full",currentTable == "Audience Data" ? "ring-4 ring-pink-800 dark:ring-slate-400 border-0" : "")}>Audience Data</button>
            <button onClick={()=>setCurrentTable("Programming Assist")} className={cn("m-2 border border-slate-500 dark:border-slate-500 flex-auto w-auto px-3 py-2 text-xl font-light rounded-full",currentTable == "Programming Assist" ? "ring-4 ring-pink-800 dark:ring-slate-400 border-0" : "")}>Programming Assist</button>
        </div>
    );
};
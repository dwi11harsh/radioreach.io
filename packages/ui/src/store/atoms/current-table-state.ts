
import { atom } from "recoil";

export const currentTableState = atom<"Receiver Data" | "Play Log" | "Audience Data" | "Programming Assist">({
    key: "currentTableState",
    default: "Receiver Data"
})
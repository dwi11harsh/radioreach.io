import { atom } from "recoil";

export const fromDateState = atom<Date>({
    key: "fromDateState",
    default: new Date()
})
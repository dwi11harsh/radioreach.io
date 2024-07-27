import { atom } from "recoil";

export const toDateState = atom<Date>({
    key: "toDateState",
    default: new Date()
})
import { atom } from "recoil";

export const fromDateState = atom<string>({
    key: "fromDateState",
    default: "2023-12-01",
})
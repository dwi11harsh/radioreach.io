import { atom } from "recoil";

let d = new Date();
const t_date = d.toISOString().split("T")[0];

export const toDateState = atom<string>({
    key: "toDateState",
    default: t_date,
})
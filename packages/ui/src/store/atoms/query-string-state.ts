import { atom } from "recoil";

export const queryStringState = atom<string | null>({
    key: "queryStringState",
    default: null
})
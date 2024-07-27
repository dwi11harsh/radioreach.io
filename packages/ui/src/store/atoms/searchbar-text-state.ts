import { atom } from "recoil";

export const searchBarTextState = atom<string | null> ({
    key: "searchBarTextState",
    default: null
})
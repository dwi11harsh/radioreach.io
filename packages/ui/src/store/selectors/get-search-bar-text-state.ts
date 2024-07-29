import { selector } from "recoil";
import { searchBarTextState } from "@repo/ui";

export const getSearchbarTextState = selector({
    key: "getSearchbarTextState",
    get: ({get}) => {
        const currText = get(searchBarTextState)

        return currText
    }
})
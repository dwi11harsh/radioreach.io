import { selector } from "recoil";
import { toDateState } from "../atoms/to-date-state";

export const getToDateState = selector({
    key: "getToDateState",
    get: ({get}) => {
        const currentDate = get(toDateState)
        return currentDate
    }
})
import { selector } from "recoil";
import { fromDateState } from "../atoms/from-date-state";

export const getFromDateState = selector({
    key: "getFromDateState",
    get: ({get})=>{
        const currentDate = get(fromDateState)
        return currentDate
    }
})
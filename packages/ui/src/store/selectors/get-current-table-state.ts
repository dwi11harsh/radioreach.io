
import { selector } from "recoil";
import { currentTableState } from "../atoms/current-table-state";

export const getCurrentTableState = selector({
    key: "getCurrentTableState",
    get: ({get})=>{
        const currentTable = get(currentTableState)

        return currentTable
    }
})
import { selector } from "recoil";
import { playLogTableDataState } from "@repo/ui";

export const getPlayLogTableDataState = selector({
    key: "getPlayLogTableDataState",
    get: ({get}) => {
        const songsDataArray = get(playLogTableDataState)
        return songsDataArray
    }
}) 
"use client"

import { useRecoilValue } from "recoil"
import { getCurrentTableState, TableLoader } from "@repo/ui"
import { PlayLogTable } from "../play-log-table"

export const Table = () => {
    const selectedTable = useRecoilValue(getCurrentTableState)

    if (selectedTable === "Play Log") {
        return (
            <div><PlayLogTable /></div>
        ) 
    } else return <TableLoader />
    
} 

export const CurrentTable = () => {
    return (
        <div className="m-3 rounded-lg">
            <Table />
        </div>
    )
}
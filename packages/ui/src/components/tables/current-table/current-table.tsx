"use client";

import { useRecoilValue } from "recoil";
import {
  getCurrentTableState,
  ReceiverTable,
  PlayLogTable,
  TableLoader,
  DrawerComponent,
  MoreInformationReceiverData,
} from "@repo/ui";

export const Table = () => {
  const selectedTable = useRecoilValue(getCurrentTableState);

  if (selectedTable === "Play Log") {
    return (
      <div>
        <PlayLogTable />
      </div>
    );
  } else if (selectedTable === "Receiver Data") {
    return <ReceiverTable />;
  } else return <TableLoader />;
};

export const CurrentTable = () => {
  return (
    <div className="m-3 rounded-lg">
      <Table />
    </div>
  );
};

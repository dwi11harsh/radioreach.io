import { useRecoilValue } from "recoil";
import { getMoreInformationState } from "@repo/ui";

export const MoreInformation = () => {
  const currentInfo = useRecoilValue(getMoreInformationState);
  return (
    <div className="flex items-center justify-center border border-slate-500"></div>
  );
};

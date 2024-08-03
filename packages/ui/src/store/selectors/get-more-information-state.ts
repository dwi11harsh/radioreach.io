import { selector } from "recoil";
import { moreInformationState } from "@repo/ui";

export const getMoreInformationState = selector({
  key: "getMoreInformationState",
  get: ({ get }) => {
    const currentInfo = get(moreInformationState);

    return currentInfo;
  },
});

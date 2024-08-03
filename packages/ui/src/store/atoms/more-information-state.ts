import { atom } from "recoil";

type MoreInformationStateType = {
  location: string;
  inhabitants: string;
  time_station_visited: string;
  total_time_spent: string;
  average_session_duration: string;
  most_popular_time_of_day: string;
};

export const moreInformationState = atom<MoreInformationStateType | null>({
  key: "moreInformationStateForReceiverData",
  default: null,
});

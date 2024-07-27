"use server"
import { BASE_URL as api_endpoint } from "@repo/ui"
import { AxiosResponse } from "axios"
import axios from "axios"
import https from "https"

const agent = new https.Agent({  
    rejectUnauthorized: false
});

type Songs = {
    rank: number;
  title: string;
  mm_song_id: string;
  artists_name: string;
  total_plays: string;
  first_play: string;
  last_play: string;
  total_play_duration_mins: string;
}

export const getPlayLogDataAction = async () => {
    const songsResponseFromApi: AxiosResponse<{ data: Songs[] }> = await axios.get(
        `${api_endpoint}/songs`,
        {
          params: {
            f_date: "2023-12-01",
            t_date: "2024-07-01",
          },
        }
      );
    console.log("Songs Response from server Action", songsResponseFromApi)
}
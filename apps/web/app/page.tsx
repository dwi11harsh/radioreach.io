"use client"

import { CurrentTable, DatePickerFromUI, playLogTableDataState, SearchBar, StaticBar, Topbar } from "@repo/ui";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { fromDateState, toDateState } from "@repo/ui";
import { AxiosResponse } from "axios";
import axios from "axios";
import { BASE_URL as api_endpoint } from "@repo/ui";

type Songs = {
    rank: number;
    title: string;
    mm_song_id: string;
    artists_name: string;
    total_plays: string;
    first_play: string;
    last_play: string;
    total_play_duration_mins: string;
};

const Home = () => {
    const [playLogTableData, setPlayLogTableData] = useRecoilState(playLogTableDataState);
    const fDate = useRecoilValue(fromDateState);
    const tDate = useRecoilValue(toDateState);

    const fetchSongsData = async () => {
        try {
            const songsResponseFromApi: AxiosResponse<{ data: Songs[] }> = await axios.get(
                `${api_endpoint}/user/songs`,
                {
                    params: {
                        f_date: fDate,
                        t_date: tDate,
                    },
                }
            );

            setPlayLogTableData(songsResponseFromApi.data.data); 
        } catch (error) {
            console.error("Error fetching songs data:", error);
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            fetchSongsData();
            console.log("envoked")
        }
    }, [fDate, tDate]); // Trigger fetch when either date changes

    return (
        <main className="min-h-screen w-full bg-inherit dark:bg-inherit">
            <Topbar />
            <StaticBar />
            <div className="flex justify-between">
                <DatePickerFromUI />
                <SearchBar />
            </div>
            <CurrentTable />
        </main>
    );
};

export default Home;
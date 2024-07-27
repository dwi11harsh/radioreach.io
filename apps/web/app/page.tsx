"use client"

import { CurrentTable, DatePickerFromUI, playLogTableDataState, SearchBar, StaticBar, Topbar } from "@repo/ui";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { BASE_URL as api_endpoint } from "@repo/ui";
import { AxiosResponse } from "axios";
import axios from "axios";

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

    useEffect(() => {
        const fetchSongsData = async () => {
            try {
                const songsResponseFromApi: AxiosResponse<{ data: Songs[] }> = await axios.get(
                    `${api_endpoint}/user/songs`,
                    {
                        params: {
                            f_date: "2023-12-01",
                            t_date: "2024-07-01",
                        },
                    }
                );
                // console.log("Songs Response from server Action", songsResponseFromApi.data.data);
                setPlayLogTableData(songsResponseFromApi.data.data); 
            } catch (error) {
                console.error("Error fetching songs data:", error);
            }
        };

        if (typeof window !== "undefined") {
            fetchSongsData();
        }
    }, [setPlayLogTableData]); // Dependency array includes setPlayLogTableData

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
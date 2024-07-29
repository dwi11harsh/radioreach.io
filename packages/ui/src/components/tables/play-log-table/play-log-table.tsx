"use client"
import { useRecoilState, useRecoilValue } from "recoil"
import { currentSongState, getPlayLogTableDataState, queryStringState, searchBarTextState, TableLoader } from "@repo/ui"
import { formatDateTimeForTimeOfPlay } from "@repo/ui"

export const PlayLogTable = () => {
    const songsData = useRecoilValue(getPlayLogTableDataState)
    const [searchString, setSearchString] = useRecoilState(searchBarTextState)
    const [currentSong, setCurrentSong] = useRecoilState(currentSongState)
    const [queryString, setQueryString] = useRecoilState(queryStringState)

    const handleRowClick = (mm_song_id: string) => {
        setQueryString(mm_song_id);
        // setDrawerState((prevState) => !prevState);
      };

    if (songsData) {
        return <div>
        <div className="max-h-[2080px] relative overflow-auto shadow-md sm:rounded-lg no-scrollbar">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-100">
            <thead className="sticky top-0 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-slate-700 dark:text-gray-100">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Rank
                </th>
                <th scope="col" className="px-6 py-3">
                  Song
                </th>
                <th scope="col" className="px-6 py-3">
                  Artist
                </th>
                <th scope="col" className="px-6 py-3">
                  Total Plays
                </th>
                <th scope="col" className="px-6 py-3">
                  First Play
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Play
                </th>
              </tr>
            </thead>
            <tbody>
              {songsData
                .filter((item) => {
                  return searchString?.toLocaleLowerCase() === ""
                    ? item
                    : item.title.toLocaleLowerCase().includes(searchString? searchString : "");
                })
                .map((song, index) => (
                  <tr
                    onClick={() => {
                      setCurrentSong(song.title);
                      handleRowClick(song.mm_song_id);
                    }}
                    key={index}
                    className=" bg-white border-b dark:bg-slate-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-slate-950"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {song.rank}
                    </th>
                    <td className="px-6 py-4">{song.title}</td>
                    <td className="px-6 py-4">{song.artists_name}</td>
                    <td className="px-6 py-4">{song.total_plays}</td>
                    <td className="px-6 py-4">
                      {formatDateTimeForTimeOfPlay(song.first_play)}
                    </td>
                    <td className="px-6 py-4">
                      {formatDateTimeForTimeOfPlay(song.last_play)}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    } else <TableLoader />
}
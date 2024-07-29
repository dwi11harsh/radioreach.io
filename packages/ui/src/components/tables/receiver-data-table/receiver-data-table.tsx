"use client"

import { useRecoilValue } from "recoil";
import { getSearchbarTextState } from "@repo/ui";

type data = {
    unit_no: string;
    postcode: string;
    status: boolean;
    last_broadcast: string;
    transmission_streangth: 0 | 1 | 2 | 3 | 4 | 5;
    listening_time: string;
}

export const ReceiverTable = () => {
    const searchString = useRecoilValue(getSearchbarTextState)

    return <div className="max-h-[2160px] w-full no-scrollbar relative overflow-auto">
        <table className="w-full text-sm text-center text-gray-500">
            <thead className="sticky top-0 dark:bg-slate-900 border border-slate-800 dark:border-slate-300">
                <tr>
                    {TH("Unit no.")}
                    {TH("Postcode")}
                    {TH("Status")}
                    {TH("Last Broadcast")}
                    {TH("Transmission Streangth")}
                    {TH("Listening Time")}
                </tr>
            </thead>
            <hr />
            <tbody>
                {DATA.map((item, index)=>(TRD({item, index})))}
            </tbody>
        </table>
    </div>
}

const TH = (content: string) => {
    return <th scope="col" className="px-6 py-3">{content}</th>
}

const TRD = ({item, index}: {item: data, index: number}) => {
    return <tr key={index} className="bg-inherit dark:bg-inherit hover:bg-slate-400 hover:dark:bg-slate-950 border">
        <th scope="row" className="px-6 py-4 whitespace-nowrap">
            {item.unit_no}
        </th>
        <td className="px-6 py-4">{item.postcode}</td>
        <td className="px-6 py-4">{STATUS(item.status)}</td>
        <td className="px-6 py-4">{item.last_broadcast}</td>
        <td className="px-6 py-4">{TRANSMISSION_STREANGTH(item.transmission_streangth)}</td>
        <td className="px-6 py-4">{item.listening_time}</td>
    </tr>
}

const STATUS = (status:boolean) => {
    if (status) {
       return <div className="flex items-center justify-center">
        <div className="h-4 w-4  rounded-full bg-green-700" />
       </div>
    } else return <div className="flex items-center justify-center">
        <div className="h-4  w-4 rounded-full bg-red-700"/>
    </div>
}

const TRANSMISSION_STREANGTH = (streangth:number) => {
    if (streangth == 0 ) {
        return (
            <div className="flex items-center justify-center">
            <div className="m-1 h-4 w-4 border border-slate-600 "/>
            <div className="m-1 h-4 w-4 border border-slate-600 "/>
            <div className="m-1 h-4 w-4 border border-slate-600 "/>
            <div className="m-1 h-4 w-4 border border-slate-600 "/>
            <div className="m-1 h-4 w-4 border border-slate-600 "/>
            
            </div>
        )
    } else if (streangth == 1 ) {
        return (
            <div className="flex items-center justify-center">
            <div className="m-1 h-4 w-4 border border-slate-600 bg-green-700"/>
            <div className="m-1 h-4 w-4 border border-slate-600 bg-red-700"/>
            <div className="m-1 h-4 w-4 border border-slate-600 bg-red-700"/>
            <div className="m-1 h-4 w-4 border border-slate-600 bg-red-700"/>
            <div className="m-1 h-4 w-4 border border-slate-600 bg-red-700"/>
            
            </div>
        )
    } else if (streangth == 2 ) {
        return (
            <div className="flex items-center justify-center">
            <div className="m-1 h-4 w-4 border border-slate-600 bg-green-700"/>
            <div className="m-1 h-4 w-4 border border-slate-600 bg-green-700"/>
            <div className="m-1 h-4 w-4 border border-slate-600 bg-red-700"/>
            <div className="m-1 h-4 w-4 border border-slate-600 bg-red-700"/>
            <div className="m-1 h-4 w-4 border border-slate-600 bg-red-700"/>
            
            </div>
        )
    } else if (streangth == 3 ) {
        return (
            <div className="flex items-center justify-center">
            <div className="m-1 h-4 w-4 border border-slate-600 bg-green-700"/>
            <div className="m-1 h-4 w-4 border border-slate-600 bg-green-700"/>
            <div className="m-1 h-4 w-4 border border-slate-600 bg-green-700"/>
            <div className="m-1 h-4 w-4 border border-slate-600 bg-red-700"/>
            <div className="m-1 h-4 w-4 border border-slate-600 bg-red-700"/>
            
            </div>
        )
    } else if (streangth == 4 ) {
        return (
            <div className="flex items-center justify-center">
            <div className="m-1 h-4 w-4 border border-slate-600 bg-green-700"/>
            <div className="m-1 h-4 w-4 border border-slate-600 bg-green-700"/>
            <div className="m-1 h-4 w-4 border border-slate-600 bg-green-700"/>
            <div className="m-1 h-4 w-4 border border-slate-600 bg-green-700"/>
            <div className="m-1 h-4 w-4 border border-slate-600 bg-red-700"/>
            
            </div>
        )
    } else {
        return (
            <div className="flex items-center justify-center">
            <div className="m-1 h-4 w-4 border border-slate-600 bg-green-700"/>
            <div className="m-1 h-4 w-4 border border-slate-600 bg-green-700"/>
            <div className="m-1 h-4 w-4 border border-slate-600 bg-green-700"/>
            <div className="m-1 h-4 w-4 border border-slate-600 bg-green-700"/>
            <div className="m-1 h-4 w-4 border border-slate-600 bg-green-700"/>
            
            </div>
        )
    }

}








const DATA: data[] = [
    {
        unit_no: "NTM 017",
        postcode: "NE 1",
        status: true,
        last_broadcast: "Receiving",
        transmission_streangth: 4,
        listening_time: "1hr53mins44secs",
    },
    {
        unit_no: "NTM 132" ,
        postcode: "NE 14",
        status: true,
        last_broadcast: "Receiving",
        transmission_streangth: 2,
        listening_time: "0hr37mins29secs",
    },
    {
        unit_no: "NTM 009"  ,
        postcode: "NE 7" ,
        status: true,
        last_broadcast: "Receiving",
        transmission_streangth: 3,
        listening_time: "5hr28mins12secs",
    },
    {
        unit_no: "NTM 076" ,
        postcode: "NE 16",
        status: true,
        last_broadcast: "Receiving",
        transmission_streangth: 4,
        listening_time: "1hr53mins44secs",
    },
    {
        unit_no: "NTM 184" ,
        postcode: "NE 1",
        status: false,
        last_broadcast: "23/05/2024",
        transmission_streangth: 0,
        listening_time: "7hr32mins18secs",
    },
    {
        unit_no: "NTM 068" ,
        postcode: "NE 9",
        status: false,
        last_broadcast: "23/05/2024",
        transmission_streangth: 0,
        listening_time: "17hr2mins30secs",
    },{
        unit_no: "NTM 242" ,
        postcode: "NE 11",
        status: false,
        last_broadcast: "22/05/2024",
        transmission_streangth: 0,
        listening_time: "8hr29mins24secs",
    },
    {
        unit_no: "NTM 027" ,
        postcode: "NE 5",
        status: false,
        last_broadcast: "20/05/2024",
        transmission_streangth: 0,
        listening_time: "22hr25mins41secs",
    },
    {
        unit_no: "NTM 114" ,
        postcode:  "NE 7",
        status: false,
        last_broadcast: "19/05/2024",
        transmission_streangth: 0,
        listening_time: "1hr53mins44secs",
    },
    {
        unit_no: "NTM 190" ,
        postcode: "NE 2",
        status: false,
        last_broadcast: "16/05/2024",
        transmission_streangth: 0,
        listening_time: "21hr53mins44secs",
    },
    {
        unit_no: "NTM 025" ,
        postcode: "NE 15",
        status: false,
        last_broadcast: "16/05/2024",
        transmission_streangth: 0,
        listening_time: "1hr53mins44secs",
    },
    
]
import React, {useContext, useEffect, useState} from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import {Typography} from "@/components/typography/typography.tsx";
import RoadContext from "@/utils/context";

const CustomToolType = ({ active, payload })=>{
    if(active){
        return (
            <div className={'custom-tooltip-session'}>
                <Typography variant={"body-xs"} component={'span'} theme={"black"}>{payload[0].value}min</Typography>
            </div>
        )
    }
}

const SessionGraphic = () => {
    const {sessions}= useContext(RoadContext)
    console.log("---------")
    console.log("Nom du fichier index.tsx")
    console.log("Ligne N° 18")
    console.log("sessions",sessions)
    console.log("---------") 
    const [data,setData]=useState<Array<object>>([])
    const days =["L","M","M","J","V","S","D"]

    useEffect(() => {
        setData(!sessions ? [] : sessions.sessions.map((i) => ({ day: days[i.day-1], sessionLength: i.sessionLength })))
    }, [sessions, setData]);


    return (
        <div className={"session"}>
            <div className={"session--title"}>
                <Typography variant={"body-sm"} component={'span'} theme={"white"}>Durée moyenne des sessions</Typography>
            </div>
            <div className={"session--content"}>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} strokeWidth ={1} 
                    >
                        <XAxis
                            type="category"
                            dataKey="day"
                            tickLine={true}
                            stroke="red"
                            padding={{right:5, left:5}}
                            tick={{ fontSize: 13, stroke: "white", opacity: 0.8}}
                        />
                        <YAxis
                            dataKey="sessionLength"
                            domain={[0, "dataMax + 30"]}
                            hide={true}
                        />
                        <Tooltip content={<CustomToolType active={undefined} payload={undefined} />} />
                        <Line
                            type="monotone"
                            dataKey="sessionLength"
                            stroke="rgba(255, 255, 255, 0.7)"
                            strokeWidth={2}
                            dot={false}
                            activeDot={{ r: 4, strokeWidth: 4, stroke: "white" }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
};

export default SessionGraphic;
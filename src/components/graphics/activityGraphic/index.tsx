import {useContext, useEffect, useState} from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from "recharts";
import {Typography} from "@/components/typography/typography.tsx";
import RoadContext from "@/utils/context";
import { IUserActivity } from '@/state/interfaces';


const CustomTooltip = ({active, payload}) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <Typography variant={"body-xs"} component={'span'} theme={"white"}>{payload[0].value}kg</Typography>
                <Typography variant={"body-xs"} component={'span'} theme={"white"}>{payload[1].value}Kcal</Typography>
            </div>
        );
    }

    return null;
};

const ActivityBar = () => {
    const {activities} = useContext(RoadContext)
    const [data,setData] = useState<IUserActivity>()
   
    useEffect(()=>{
        activities?.sessions.map(i=> {
            return i.day = i.day?.split("-")[2]}
        )
        setData(activities)
    },[activities])

    return (
        <div className={"activity"}>
            <div className={"activity_header"}>
                <Typography component={"p"} variant={"body-sm"} theme={"black"}> Activité quotidienne</Typography>
                <div className={"activity_header--legends"}>
                    <div className={"info"}>
                        <div className={"icon--black"}></div>
                        <Typography component={"p"} variant={"body-sm"} theme={"grey"}>Poids (kg)</Typography>
                    </div>
                    <div className={"info"}>
                        <div className={"icon--red"}></div>
                        <Typography component={"p"} variant={"body-sm"} theme={"grey"}>Calories brûlées
                            (kCal)</Typography>
                    </div>
                </div>

            </div>
            <div className={"activity_content"}>
                <ResponsiveContainer>
                    <BarChart data={data?.sessions} barGap={8} barCategoryGap={1}>
                        <CartesianGrid vertical={false} strokeDasharray="1 1"/>
                        <XAxis dataKey="day" tickLine={false} tick={{fontSize: 14}} dy={15} stroke="1 1"/>
                        <YAxis yAxisId="kilogram" dataKey="kilogram" type="number"
                               domain={['dataMin - 2', 'dataMax + 1']} tickCount="4" axisLine={false}
                               orientation="right" tickLine={false} tick={{fontSize: 14}} dx={15}/>
                        <YAxis yAxisId="calories" dataKey="calories" type="number"
                               domain={['dataMin - 20', 'dataMax + 10']} hide={true}/>
                        <Tooltip content={<CustomTooltip active={undefined} payload={undefined}/>}/>
                        <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]}/>
                        <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]}/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default ActivityBar;

import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts";
import { useContext, useEffect, useState } from "react";
import RoadContext from "@/utils/context";
import { IBindPerformance, IPerformance } from "@/state/interfaces";

const RadarGraphic = () => {
    const { performances } = useContext(RoadContext)
    const [data, setData] = useState<Array<IPerformance>>([])

    useEffect(() => {
        setData(!performances ? [] : performances.data.map((i: IBindPerformance) => ({ kind: performances.kind[i.kind], value: i.value })))
    }, [performances, setData]);

    return (
        <div className={"radar"}>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx='50%' cy='50%' outerRadius='65%' data={data}>
                    <PolarGrid gridType="polygon" />
                    <PolarAngleAxis dataKey="kind" stroke='white' tickLine={false} axisLine={false} tick={{ fontSize: 10 }} />
                    <Radar dataKey='value' stroke='#FF0101' fill='#FF0101' fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RadarGraphic;

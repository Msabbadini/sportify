import { useContext, useEffect, useState } from "react";
import RoadContext from "@/utils/context";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { Typography } from "@/components/typography/typography.tsx";

const ScoreGraphic = () => {
    const { profile } = useContext(RoadContext)
    const [score, setScore] = useState([])

    useEffect(() => {
        setScore([
            { value: profile.score },
            { value: 1 - profile.score },
        ])
    }, [profile]);

    return (
        <div className={"score"}>
            <div className={"score_title"}>
                <Typography theme={"black"} component={"h2"} variant={"lead"}>Score</Typography>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={score}
                        dataKey="value"
                        innerRadius={70}
                        outerRadius={85}
                        startAngle={90}
                    >
                        {score.map((entry, index) =>
                            index === 0 ? (
                                <Cell key={`cell-${index}`} cornerRadius={10} fill="#ff0000" />
                            ) : (
                                <Cell key={`cell-${entry}`} fill="#FBFBFB" />
                            )
                        )}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className={'score_center'}>
                <Typography component={"span"} theme={"black"} variant={"body-md"}> {score[0]?.value * 100}%</Typography>
                <Typography component={"span"} theme={"grey"} variant={"body-xs"}  > de votre objectif</Typography>
            </div>
        </div>
    );
};

export default ScoreGraphic;


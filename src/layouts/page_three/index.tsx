import { useContext } from "react";
import RoadContext from "@/utils/context";

import Typography from "@/components/typography/typography";
import Card from "@/components/card";

import ActivityGraphic from "@/components/graphics/activityGraphic";
import SessionGraphic from "@/components/graphics/sessionGraphic";
import RadarGraphic from "@/components/graphics/radarGraphic";
import ScoreGraphic from "@/components/graphics/scoreGraphic";
import { useParams } from "react-router-dom";

const CaloriesIcon = "/assets/calories-icon.svg"
const ProteinIcon = "/assets/protein-icon.svg"
const CarbsIcon = "/assets/carbs-icon.svg"
const FatIcon = "/assets/fat-icon.svg"

const PageThreeLayout = () =>{
    const { profile } = useContext(RoadContext)
    if (!profile) return (<></>)

   
    return (
        <div className={"home"}>
            <div className={"home_header"}>
                <div className={"home_header--title"}>
                    <Typography variant={"h1"} component={"h1"} theme={"black"}>Bonjour</Typography>
                    <Typography variant={"h1"} component={"h1"} theme={"red"}>{profile.userInfos["firstName"]}</Typography>
                </div>
                <Typography variant={"body-md"} component={"p"} theme={"black"}>
                    Félicitation ! Vous avez explosé vos objectifs hier 👏
                </Typography>
            </div>
            <div className={"home_content"}>
                <div className={"home_content_stats"}>
                    {/* <ActivityGraphic /> */}
                    <div className={"home_content_stats--others"} >
                        <SessionGraphic />
                        <RadarGraphic />
                        <ScoreGraphic />
                    </div>

                </div>
            </div>
        </div>

    );
}

export default PageThreeLayout
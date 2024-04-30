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

const PageOneLayout = () =>{
    const { profile } = useContext(RoadContext)
    if (!profile) return (<></>)

    const cardsData = [
        {
            name: "Calories",
            numbers: `${profile.keyData["calorieCount"]}kCal`,
            icon: CaloriesIcon
        },
        {
            name: "Protéines",
            numbers: `${profile.keyData["proteinCount"]}g`,
            icon: ProteinIcon
        },
        {
            name: "Glucides",
            numbers: `${profile.keyData["carbohydrateCount"]}g`,
            icon: CarbsIcon
        },
        {
            name: "Lipides",
            numbers: `${profile.keyData["lipidCount"]}g`,
            icon: FatIcon
        },
    ]

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
                    <ActivityGraphic />
                    <div className={"home_content_stats--others"} >
                        <SessionGraphic />
                        <RadarGraphic />
                        <ScoreGraphic />
                    </div>

                </div>
                <div className={"home_content--cards"}>
                    {cardsData.map((i, index) =>
                        <Card key={index} icon={i.icon} name={i.name} numbers={i.numbers} />
                    )}
                </div>
            </div>
        </div>

    );
}

export default PageOneLayout
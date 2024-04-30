import { Typography } from "@/components/typography/typography.tsx";
import SidebarLink from "@/components/navigation/sidebar/sidebarlink";
import RoadContext from "@/utils/context";
import { useContext } from "react";

const Sidebar = () => {
    const { userId } = useContext(RoadContext)
    return (
        <div className={"sidebar"}>
            <div className={"sidebar_navigation"}>
                <SidebarLink href={`/${userId}/page/1`} nameIcon={"yoga"} />
                <SidebarLink href={`/${userId}/page/2`} nameIcon={"swimming"} />
                <SidebarLink href={`/${userId}/page/3`} nameIcon={"bike"} />
                <SidebarLink href={`/${userId}/page/4`} nameIcon={"haltere"} />
            </div>
            <div className={"sidebar_text"}>
                <Typography variant={"body-xs"} component={"p"} theme={"white"}>
                    Copyright, SportSee 2020
                </Typography>
            </div>

        </div>
    )

}

export default Sidebar
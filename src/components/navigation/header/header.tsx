import {ActiveLink} from "@/components/navigation/header/active_link.tsx";
import { Typography } from "@/components/typography/typography";
import RoadContext from "@/utils/context";
import { useContext } from "react";
/*const logoNavigation = `${import.meta.env.PUBLIC_URL}/assets/logo.svg`;*/
const logoNavigation = "/assets/logo.svg"
const Header = ()=>{

    const { userId } = useContext(RoadContext)

    return(
        <header className={"header"}>

            <div className={"header_logo"}>
                <a href={`/${userId}/home`}>
                    <img src={logoNavigation} alt=""/>
                </a>
            </div>

            <div className={"header_navigation"} >
                <Typography
                    variant={"lead"}
                    component="div"
                    className="header_navigation--links"
                    align={'left'}
                >
                    <ActiveLink href={`/${userId}/home`} nameRoute={"Accueil"}/>
                    <ActiveLink href={`/${userId}/profile`} nameRoute={"Profil"}/>
                    <ActiveLink href={`/${userId}/settings`} nameRoute={"Réglages"}/>
                    <ActiveLink href={`/${userId}/community`} nameRoute={"Communauté"}/>
                </Typography>
            </div>
        </header>
    )

}

export default Header

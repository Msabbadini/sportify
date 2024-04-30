import IconHaltere from "@/components/icons/iconhaltere"
import IconSwimming from "@/components/icons/iconswimming"
import IconYoga from "@/components/icons/iconyoga"
import IconBike from "@/components/icons/iconbike"

import { NavLink } from "react-router-dom";

interface Props {
    href: string;
    nameIcon: string;
}

const SidebarLink = ({ href, nameIcon }: Props) => {
    const icon = {
        "haltere": IconHaltere,
        "swimming": IconSwimming,
        "yoga": IconYoga,
        "bike": IconBike
    }

    return (
        <NavLink
            to={href}
            className={({ isActive }) => (isActive ? "svg_red" : "svg_black")}
        >
            {icon[nameIcon]}
        </NavLink>
    )

}

export default SidebarLink
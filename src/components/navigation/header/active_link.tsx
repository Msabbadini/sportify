import { NavLink } from "react-router-dom";

interface Props {
    href: string;
    nameRoute: string;
}

export const ActiveLink = ({ href, nameRoute }: Props) => {
    return (
        <NavLink
            to={href}
            className={({ isActive }) => (isActive ? "text_red isActive" : "text_white")}
        >
            {nameRoute}
        </NavLink>
    )

}
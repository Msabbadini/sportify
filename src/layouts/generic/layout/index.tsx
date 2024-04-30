import {Outlet, useParams, useNavigate} from "react-router";
import Header from "@/components/navigation/header/header.tsx";
import Sidebar from "@/components/navigation/sidebar/sidebar.tsx";
import ContainerLayout from "@/layouts/generic/container";
import {useContext, useEffect} from "react";
import RoadContext from "@/utils/context";

const Layout = () => {
    const navigate = useNavigate();
    const { userID } = useParams();
    const { setProperty,error } = useContext(RoadContext)
    useEffect(() => {
        // Faire quelque chose lorsque userID change
        console.log("userID a changé :", userID);
        setProperty("userID", userID)
        // Vous pouvez effectuer une logique supplémentaire ici
    }, [setProperty,userID]);

    useEffect(() => {
        if(error) navigate("/error")
    }, [navigate, error]);

    return (
        <>
            <Header/>
            <Sidebar/>
            <ContainerLayout>
                <Outlet/>
            </ContainerLayout>
        </>
    )

}
export default Layout
import {BrowserRouter} from "react-router-dom";
import Router from "@/routes/router";
import {useContext, useEffect} from "react";
import RoadContext from "@/utils/context";
import {MOCKED} from "@/state/interfaces";

const App = () => {
    const {setProperty} = useContext(RoadContext)

    useEffect(() => {
        setProperty("mode", MOCKED)
    }, [setProperty]);

    return (
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
    )
}
export default App

import { Route, Routes, useParams } from "react-router-dom";
import Layout from "@/layouts/generic/layout";
import CommunityPage from "../pages/community";
import HomeLayout from "@/layouts/home";
import ProfilePage from "../pages/profile";
import SettingsPage from "@/pages/settings";
import ErrorPage from "@/pages/error";
import PageOne from "@/pages/page_one";
import PageTwo from "@/pages/page_two";
import PageThree from "@/pages/page_three";
import PageFour from "@/pages/page_four";
import { useEffect } from "react";

const Router = () => {
    

    return (
        <Routes>
            <Route path='/error' element={<ErrorPage />} />
            <Route path='/:userID/' element={<Layout />}>
                {/* Routes nécessitant userID */}
                <Route path='page/1' element={<PageOne />} />
                <Route path='page/2' element={<PageTwo />} />
                <Route path='page/3' element={<PageThree />} />
                <Route path='profile' element={<ProfilePage />} />
                <Route path='settings' element={<SettingsPage />} />
                <Route path='page/4' element={<HomeLayout />} />
                <Route path='home' element={<HomeLayout />} />
                <Route path='community' element={<CommunityPage />} />
                {/* Route d'erreur */}
                
            </Route>
            <Route path='*' element={<ErrorPage />} />
        </Routes>
    );
};

export default Router;

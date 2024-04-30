import RoadContext from '@/utils/context';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { MOCKED, API } from "@/state/interfaces"

const SettingsLayout = () => {
    const { setProperty, userId, switchMode } = useContext(RoadContext)
    const [isChecked, setIsChecked] = useState(false);
    const [isCheckedApi,setIsCheckedApi] = useState(false)

    console.log("---------")
    console.log("Nom du fichier index.tsx")
    console.log("Ligne N° 9")
    console.log("switch",userId)
    console.log("---------")

    const changeApi = useCallback((e) => {
        e.preventDefault()
        setProperty("mode", switchMode === MOCKED ? API : MOCKED)
    }, [setProperty, switchMode])

    const changeProfile = useCallback((e) => {
        e.preventDefault()
        setProperty("userID", userId === "18" ? "12" : "18")
    },[setProperty, userId])

    useEffect(() => {
        setIsChecked(userId === '18');
    }, [userId]);

    useEffect(()=>{
        setIsCheckedApi(switchMode === 'api')
    },[switchMode])

    return (
        <div className="settings">
            <div className="checkbox-wrapper-8">
                <input
                    type="checkbox"
                    id="cb3-8"
                    className="tgl tgl-skewed"
                    data-tg-on="Api"
                    data-tg-off="Mocked"
                    checked={isCheckedApi}
                    onChange={changeApi}
                />
                <label htmlFor="cb3-8" 
                    data-tg-on={switchMode === 'api' ? 'Api' : 'Mock'}
                    data-tg-off={switchMode === 'mocked' ? 'Mock' : 'Api'}
                    className="tgl-btn"></label>
            </div>
            <div className="checkbox-wrapper-8">
                <input
                    type="checkbox"
                    id="cb3-9"
                    // className="tgl tgl-skewed"
                    checked={isChecked}
                    onChange={changeProfile}
                />
                <label>
                    {userId === '18' ? 'Cecilia' : 'Karl'}
                </label>

            </div>
        </div>
    )
};

export default SettingsLayout;

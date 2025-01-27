import { createContext, ReactNode, useState } from "react";
import Bolha from "../models/Bolha";
import colorPalettes from "../utils/colorpalettes/ColorPalettes";


interface BubbleSettingsContextProps{
    bolha: Bolha
    setBolha: React.Dispatch<React.SetStateAction<Bolha>>;
}

interface BubbleSettingsProviderProps {
    children: ReactNode
}


const BubbleSettingContext = createContext({} as BubbleSettingsContextProps)
export {BubbleSettingContext};

export function BubbleSettingsProvider({children} : BubbleSettingsProviderProps ){

    const [bolha, setBolha] = useState<Bolha>({
        cor: colorPalettes.golden,
        upgrades:[],
        armadura: 0,
        coins:0
    })

    return(
        <BubbleSettingContext.Provider value={{ bolha, setBolha }}>
            {children}
        </BubbleSettingContext.Provider>

    )

}
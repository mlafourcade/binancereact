import React, { useContext } from "react";
import { ThemeContext, ContextData } from "../../../../shared/contexts";

export const Dashboard = () => {
    const { themeName } = useContext(ThemeContext);
    const { name } = useContext(ContextData);
    return (      
        <div>
            <h1>Qualquer outro texto</h1>
            <h1>{themeName}</h1>
            <h1>{name}</h1>
            <h1>Dasboard</h1>
        </div>
    );
}

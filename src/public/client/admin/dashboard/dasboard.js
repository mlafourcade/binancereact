import React, { useContext } from "react";
import { ContextData } from "../../../../shared/contexts";

export const Dashboard = () => {
    const { name } = useContext(ContextData);
    return (      
        <div>
            <h1>Qualquer outro texto</h1>
            <h1>{name}</h1>
            <h1>Dasboard</h1>
        </div>
    );
}

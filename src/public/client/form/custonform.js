import React, { useContext, useState } from "react";
import { ContextData } from "../../../shared/contexts";

export default function CustonForm(){

    const { submit } = useContext(ContextData);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Dados Form", {name, email})

        submit({name,email})
    }

    return (

        <form onSubmit={handleSubmit}>

           <label htmlFor="name">Nome</label>
           <input 
                type="text" 
                name="name" 
                id="name" 
                value={name} 
                onChange={e => setName(e.target.value)} 
            />

           <label htmlFor="email">Email</label>
           <input 
                type="email" 
                name="email" 
                id="email" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
            />
           
           <button type="submit">Enviar</button>
        </form>
    );
}


/*
const costumerForm = ( { onSubmit }) => {





}*/
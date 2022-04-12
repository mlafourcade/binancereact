import React, { useState } from "react";

export default function CustonForm(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("dados", {name, email})
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
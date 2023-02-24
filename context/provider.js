import React, {useState, createContext} from 'react'

export const Context = createContext()

export default function Provider({children})
{
    const [teste, setTeste] = useState();
}
import React from 'react'

interface Persona { 
    nombreCompleto: string, 
    edad: number,
    direccion: Direccion
    /*direccion: { 
        pais: string, 
        estado: string,  
        ciudad: string, 
        calle: string, 
        numero: number 
    }*/
}

interface Direccion { 
    pais: string, 
    estado: string,  
    ciudad: string, 
    calle: string, 
    numero: number 
}

export const ObjetosLiterales = () => {

    const persona: Persona = { 
        nombreCompleto: 'Christopher', 
        edad: 22,
        direccion: {
            pais: 'México',
            estado: 'Nayarit',
            ciudad: 'Tepic',
            calle: 'Conocido',
            numero: 388
        }
    }
    
    return (
        <div>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </div>
    )
}

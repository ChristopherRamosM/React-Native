import React from 'react'

export const TiposBasicos = () => {

    let ChrisIdNombre: string | number = "Christopher";
    ChrisIdNombre = 706;

    //let ChrisIdNombre: number = "Christopher";
    //ChrisIdNombre = 706;

    //let ChrisIdNombre: string = "Christopher";
    //ChrisIdNombre = 706;

    const ChrisNombre: string = "Christopher"; 
    const ChrisApellidos: string = "Ramos Montes" 
    const ChrisNumControl: number = 1840; 
    const ChrisNumControl2 = 1180; 
    const ChrisFechaReg: Date = new Date(); 
    let ChrisExperiencia = 20; 
    let ChrisActivo: boolean = true;

    let ChrisPasatiempos: string[] = ['videojuegos', 'deportes', 'series', 'peliculas'];

    //ChrisPasatiempos.push(706); 
    //ChrisPasatiempos.push(true);

    let ChrisSeries = [];
    ChrisSeries.push(777);
    ChrisSeries.push(true);
    ChrisSeries.push('Game of Thrones');

    return (
        <>
            <h3>Tipos Básicos</h3>
            Alias: {ChrisIdNombre},<br>
        </br>
            Nombre: {ChrisNombre},<br>
        </br>
            Apellidos: {ChrisApellidos},<br>
        </br>
            No. Control: {ChrisNumControl},<br>
        </br>
            No. Control 2: {ChrisNumControl2},<br>
        </br>
            Fecha de Registro: {ChrisFechaReg.toString()},<br>
        </br>
            Años de Experiencia: {ChrisExperiencia},<br>
        </br>
            Estatus: {(ChrisActivo) ? 'Activo' : 'No Activo'},<br>
        </br>
            Series: {ChrisSeries[0]}, {(ChrisSeries[1]) ? 'Activo' : 'No Activo'}, {ChrisSeries[2]}
        </>
    )
}

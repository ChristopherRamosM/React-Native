//import { useEffect, useState, useRef } from "react";
//import { reqRespApi } from '../api/reqRes';
//import { ReqRespUsuarioListado, Usuario } from "../interfaces/reqResp";
//import { useUsuarios } from './hooks/useUsuarios';
import { Usuario } from '../interfaces/reqResp';
import { useUsuarios } from './hooks/useUsuarios';

export const Usuarios = () => {

    const { usuarios, CRFnPaginaSiguiente, CRFnPaginaAnterior } = useUsuarios();

    const renderItem = (usuario: Usuario) => { 
        return ( 
            <tr key={usuario.id.toString()}> 
                <td> 
                    <img src={ usuario.avatar } alt={ usuario.first_name } style={{ width: 50, borderRadius: 100 }}></img>
                </td> 
                <td> 
                    { usuario.first_name } { usuario.last_name } 
                </td> 
                <td> 
                    { usuario.email } 
                </td> 
            </tr> 
        ) 
    }

    return (
        <> 
            <h3>Usuarios</h3> 
            <table className = "table"> 
                <thead> 
                    <tr> 
                        <th> 
                            Avatar 
                        </th> 
                        <th> 
                            Nombre 
                        </th> 
                        <th> 
                            Correo 
                        </th> 
                    </tr> 
                </thead> 
                <tbody>
                    {
                        usuarios.map(CRArgUsuario => renderItem(CRArgUsuario))
                    }
                </tbody>
            </table>
            <button className="btn btn-primary" onClick= { CRFnPaginaAnterior }>Anterior</button>
            &nbsp;
            <button className="btn btn-primary" onClick= { CRFnPaginaSiguiente }>Siguiente</button>
        </>
    )
}

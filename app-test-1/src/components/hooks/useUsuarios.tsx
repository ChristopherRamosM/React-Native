import { useEffect, useRef, useState } from "react";
import { reqRespApi } from "../../api/reqRes";
import { ReqRespUsuarioListado, Usuario } from "../../interfaces/reqResp";

export const useUsuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    const CRRefPage = useRef(1);

    useEffect(() => {
        CRFnCargaUsuarios();
    }, [])

    const CRFnCargaUsuarios = async () => {
        const CRResponse = await
        reqRespApi.get<ReqRespUsuarioListado>('/users', { params: { page: CRRefPage.current }})
        .then(resp=> {
            if ( resp.data.data.length > 0 ) {
                setUsuarios(resp.data.data);
                //CRRefPage.current ++;
            }
            else {
                alert('No hay mas registros');
            }
        })
        .catch(err => console.log(err))
    }

    const CRFnPaginaSiguiente = () => {
        CRRefPage.current ++;
        CRFnCargaUsuarios();  
    }

    const CRFnPaginaAnterior = () => {
        if ( CRRefPage.current > 1 ){
            CRRefPage.current --;
            CRFnCargaUsuarios();
        } 
    }

    return{
        usuarios,
        //CRFnCargaUsuarios
        CRFnPaginaAnterior, 
        CRFnPaginaSiguiente 
    }
}
import {useReducer} from 'react';
import {useEffect} from 'react';


interface AuthState {
    validando: boolean,
    token: string | null,
    username: string,
    nombre: string,
}

const initialState: AuthState = { 
    validando: true, 
    token: null, 
    username: '', 
    nombre: '' 
}

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                username: '',
                nombre: ''
            }

        case 'login':
            const {nombre, username} = action.payload;
            return {
                validando: false,
                token: 'MITOKEN1234567890',
                username,
                nombre,
            }

        break;
        default:
            return state;
            break;
    }
}

type LoginPayLoad = {
    username: string,
    nombre: string
}

type AuthAction = 
    | { type: 'logout'}
    | {type: 'login', payload: LoginPayLoad};

export const Login = () => {

    const [state, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => { 
        setTimeout(() => {dispatch({type:'logout'})}, 2500);
    }, []);

    const login = () => {
        dispatch({
            type: 'login',
            payload: {
                username: 'CRAMOS',
                nombre: 'Christopher'
            }
        })
    }

    const logout = () => {
        dispatch({
            type: 'logout'
        })
    }

    if (state.validando) { 
        return ( 
            <> 
                <h3>Login</h3> 
                <div className="CRAlertInfo_Div">Validando Información...</div>
            </>
        )
    }

    return (
        <>
            <h3>Login</h3> 
            { 
            (  state.token  ) 
                ?  
                ( 
                    <div className="CRAlertSuccess_Div">Autenticado como: { state.nombre } </div>
                ) 
                :  
                (    
                    <div className="CRAlertDanger_Div">No Autenticado...</div>
                ) 
            }
            { 
                ( state.token ) 
                ? (  
                    <button name="CRLogout_Button" className="btn btn-primary" onClick={ logout }>Logout</button>
                ) 
                : (    
                    <button name="CRLogin_Button" className="btn btn-primary" onClick={ login }>Login</button>
                ) 
            }  
        </>
    )

}

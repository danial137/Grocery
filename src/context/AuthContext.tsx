import { createContext } from "react";
import type { User } from "../types";


interface AuthContextType {

    user: User | null
    token: string | null
    loading: boolean;
    login: ( email: string, password: string ) => Promise<void>

}


const AuthContecxt = createContext<AuthContextType | undefined>
    (undefined)
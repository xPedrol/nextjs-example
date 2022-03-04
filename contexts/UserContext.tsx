import {createContext, ReactNode, useContext, useState} from 'react';
import {TUser} from '../types/user/User';
import {UserLogin} from '../types/user/UserLogin';
import {api} from '../config/api';
import {cookieService} from '../services/CookieService';
import {useRouter} from 'next/router';
import {AuthService} from '../services/AuthService';


type UserContextType = {
    user: TUser | null;
    setUser: (user: TUser | null) => void;
    login: (user: UserLogin, setIsLoading: (isLoading: boolean) => void) => void;
    logout: () => void;
}
const UserContext = createContext({} as UserContextType);

export const UserProvider = ({children}: { children: ReactNode }) => {
    const router = useRouter();
    const [user, setUser] = useState<TUser | null>(null);
    const authService = new AuthService();

    function login({email, password}: UserLogin, setIsLoading: (isLoading: boolean) => void) {
        setIsLoading(true);
        authService.authenticate(email, password).then(res => {
            if (res.data?.user) {
                setUser(res.data.user);
            }
            if (res.data?.token) {
                cookieService.setCookie(null, process.env.NEXT_PUBLIC_AUTH_TOKEN_COOKIE, res.data.token);
                api.defaults.headers['Authorization'] = `Bearer ${res.data.token}`;
                router.push('/');
            }
        }).finally(() => {
            if (setIsLoading) setIsLoading(false);
        });
    }

    function logout() {

    }


    return (
        <UserContext.Provider value={{user, setUser, login, logout}}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    return useContext(UserContext);
};
import axios from 'axios';
import {cookieService} from '../services/CookieService';
import {createStandaloneToast} from '@chakra-ui/react';
import {CustomTheme} from '../contexts/theme/theme';

// CHAMADA PARA API COM CONTEXTO DO SERVIDOR
export const apiClient = (ctx?: any) => {
    const axiosApi = axios.create({
        baseURL: 'http://localhost:8080/',
        timeout: 10000,
    });

    axiosApi.interceptors.response.use(
        response => {
            return response;
        },
        error => {
            const toast = createStandaloneToast({theme:CustomTheme});
            if(!toast.isActive(error.response.data.message)) {
                toast({
                    title: `Status ${error.response.status}`,
                    description: `${error.response.data.message}`,
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                    id: `${error.response.data.message}`,
                });
            }
            return error;
        },
    );
    const token = cookieService.getCookie(ctx, process.env.AUTH_TOKEN_COOKIE as string);
    if (token) {
        axiosApi.defaults.headers['Authorization'] = `Bearer ${token}`;
    }
    return axiosApi;
};

// VARIÁVEL PARA CLIENT-SIDE SEM CONTEXTO
export const api = apiClient();
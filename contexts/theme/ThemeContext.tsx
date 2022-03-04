import {createContext, useContext} from 'react';
import {ChakraProvider, cookieStorageManager, localStorageManager} from '@chakra-ui/react';
import {CustomTheme} from './theme';

const ThemeContext = createContext({} as any);

export const ThemeProvider = ({cookies, children}: any) => {
    const colorModeManager =
        typeof cookies === 'string'
            ? cookieStorageManager(cookies)
            : localStorageManager;
    return (
        <ChakraProvider theme={CustomTheme} colorModeManager={colorModeManager}>
            {children}
        </ChakraProvider>
    );
};

export const useCustomTheme = () => {
    return useContext(ThemeContext);
};

export function getServerSideProps({req}: any) {
    return {
        props: {
            // first time users will not have any cookies and you may not return
            // undefined here, hence ?? is necessary
            cookies: req.headers.cookie ?? '',
        },
    };
}
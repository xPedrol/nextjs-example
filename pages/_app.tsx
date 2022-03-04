import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {ThemeProvider} from '../contexts/theme/ThemeContext';
import {UserProvider} from '../contexts/UserContext';

export default function MyApp({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider cookies={pageProps.cookies}>
            <UserProvider>
                <Component {...pageProps} />
            </UserProvider>
        </ThemeProvider>
    );
}
export {getServerSideProps} from '../contexts/theme/ThemeContext';

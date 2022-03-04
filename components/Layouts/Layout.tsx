import Head from 'next/head';
import {LayoutProps} from '../../types/LayoutProps';
import Header from '../Header';


export default function Layout({children, title}: LayoutProps) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Header/>
            {children}
        </>
    );
}
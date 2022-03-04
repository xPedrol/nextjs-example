import Head from 'next/head';
import {LayoutProps} from '../../types/LayoutProps';
import Header from '../Header';
import {Flex, useColorModeValue} from '@chakra-ui/react';

export default function AuthLayout({children, title}: LayoutProps) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Header/>
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                {children}
            </Flex>
        </>
    );
}
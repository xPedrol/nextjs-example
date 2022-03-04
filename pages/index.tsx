import type {NextPage} from 'next';
import {Button, useColorMode} from '@chakra-ui/react';

const Home: NextPage = () => {
    const {colorMode, toggleColorMode} = useColorMode();
    return (
        <>
            <Button onClick={toggleColorMode}>
                Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
            </Button>
        </>
    );
};

export function getServerSideProps({req}: any) {
    return {
        props: {

        },
    };
}
export default Home;

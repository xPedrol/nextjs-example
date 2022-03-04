import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import AuthLayout from '../../components/Layouts/AuthLayout';
import {useForm} from 'react-hook-form';
import {useState} from 'react';
import {useUserContext} from '../../contexts/UserContext';

type Inputs = {
    email: string;
    password: string;
};
export default function Login() {
    const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const auth = useUserContext();
    const onSubmit = (data: Inputs) => {
        auth.login(data, setIsLoading);
    };

    return (
        <>
            <AuthLayout title={'Login'}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                        <Text fontSize={'lg'} color={'gray.600'}>
                            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
                        </Text>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Stack spacing={4}>
                                <FormControl id="email" isInvalid={!!errors.email}>
                                    <FormLabel>Email address</FormLabel>
                                    <Input type="email" {...register('email', {required: true})}/>
                                    <FormErrorMessage>Email is required.</FormErrorMessage>
                                </FormControl>
                                <FormControl id="password" isInvalid={!!errors.password}>
                                    <FormLabel>Password</FormLabel>
                                    <Input type="password" {...register('password', {required: true})}/>
                                    <FormErrorMessage>Password is required.</FormErrorMessage>
                                </FormControl>
                                <Stack spacing={10}>
                                    <Stack
                                        direction={{base: 'column', sm: 'row'}}
                                        align={'start'}
                                        justify={'end'}>
                                        {/*<Checkbox>Remember me</Checkbox>*/}
                                        <Link color={'blue.400'}>Forgot password?</Link>
                                    </Stack>
                                    <Button
                                        type={'submit'}
                                        bg={'blue.400'}
                                        color={'white'}
                                        _hover={{
                                            bg: 'blue.500',
                                        }}
                                        isLoading={isLoading}
                                        loadingText="Signing in">
                                        Sign in
                                    </Button>
                                </Stack>
                            </Stack>
                        </form>
                    </Box>
                </Stack>
            </AuthLayout>
        </>
    );
}
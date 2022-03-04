// theme.ts

// 1. import `extendTheme` function
import {extendTheme, type ThemeConfig} from '@chakra-ui/react';

// 2. Add your color mode config
const config: ThemeConfig = {
    initialColorMode: 'system',
    useSystemColorMode: false,
};

// 3. extend the theme
export const CustomTheme = extendTheme({
    config,
    fonts: {
        heading: 'Inter',
        body: 'Inter',
    },
});

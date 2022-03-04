import {destroyCookie, parseCookies, setCookie} from 'nookies';
import {CookieSerializeOptions} from 'cookie';
import dayjs from 'dayjs';


class CookieService {
    getCookie(ctx = null, name: string): any {
        const {name: cookie} = parseCookies(ctx);
        return cookie;
    }

    setCookie(ctx = null, name: string, value: string, options: CookieSerializeOptions = {}) {
        console.warn(name)
        let expires = options?.expires;
        if (!expires) {
            expires = dayjs().add(1, 'day').toDate();
        }
        setCookie(ctx = null, name, value, {
            expires,
            path: '/'
        });
    }

    removeCookie(ctx = null, name: string) {
        destroyCookie(ctx, name);
    }
}

export const cookieService = new CookieService();
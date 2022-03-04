import {TUser} from './User';

export type UserAuthenticateResponse = {
    user: TUser;
    token: string;
    refreshToken: string;
};
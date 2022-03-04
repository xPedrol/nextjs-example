import {BaseApiService} from './BaseApiService';
import {UserAuthenticateResponse} from '../types/user/UserAuthenticateResponse';
import {AxiosResponse} from 'axios';

export class AuthService extends BaseApiService {
    constructor(context?: any) {
        super(context);
    }

    async authenticate(email: string, password: string): Promise<AxiosResponse<UserAuthenticateResponse>> {
        return this.api.post<UserAuthenticateResponse>('/auth/login', {
            email,
            password
        });
    }
}


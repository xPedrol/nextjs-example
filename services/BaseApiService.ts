import {AxiosInstance} from 'axios';
import {apiClient} from '../config/api';

export class BaseApiService {
    context: any;
    api: AxiosInstance;

    constructor(context?: any) {
        this.context = context;
        this.api = apiClient(context);
    }
}
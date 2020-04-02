import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

export const baseUrl = process.env.NODE_ENV === 'development' ? 'http://' : '/'

const timeout = 10

const service = axios.create({
    timeout: timeout,
    baseURL: baseUrl,
    withCredentials: true
})

// request config
service.interceptors.request.use((config: AxiosRequestConfig) => {
    config.headers['X-Requested-With'] = 'XMLHttpRequest';
    // config['crossDomain']= true;
    return config
}, (error: any) => {
    Promise.reject(error)
})

// response config
service.interceptors.response.use((response: AxiosResponse) => {
        const res = response.data
        if (response.config.responseType === 'blob') {
            if (res.type === 'application/json') {
                return Promise.reject('文件下载错误')
            } else {
                return response.data
            }
        } else if (!res) {
            const error = new Error(res)
            return Promise.reject(error)
        } else {
            return res
        }
    }, (error: any) => {
        if (!axios.isCancel(error)) {
            let msg = ''
            if (error.request.status === 302) {
                msg = '未登录'
            } else if (error.request.status === 403) {
                msg = '地址错误'
            } else if (error.request.status === 404) {
                msg = '没找到'
            } else if (error.request && error.request.data) {
                msg = error.request.data.message
            } else {
                msg = 'Something Happened'
            }
            console.log(msg)
        }
        return Promise.reject(error)
})

// post Type
export interface requestType extends AxiosRequestConfig {}

// create api functin
export function fetch(requestData: AxiosRequestConfig) {
    if (!requestData.url) {
        const err = new Error('请传入请求路径')
        return Promise.reject(err)
    }
    if (!requestData.method) {
        const err = new Error('请传入请求方法')
        return Promise.reject(err)
    }

    const serviceData: AxiosRequestConfig = {
        url: requestData.url,
        method: requestData.method,
        headers: requestData.headers,
        params: requestData.params
    }
    if (requestData.onUploadProgress) {
        serviceData.onUploadProgress = requestData.onUploadProgress
    }
    if (requestData.responseType) {
        serviceData.responseType = requestData.responseType
    }
    if (requestData.cancelToken) {
        serviceData.cancelToken = requestData.cancelToken
    }
    if (requestData.method.toLocaleLowerCase() === 'get') {
        serviceData.params = requestData.data || {}
    }
    if (requestData.method.toLocaleLowerCase() === 'post') {
        serviceData.data = requestData.data || {}
    }
    if (!serviceData.headers) {
        if (requestData.method === 'get') return axios.get(requestData.url)
    }
    return service(serviceData)
}

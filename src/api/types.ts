export interface Service {
    method: String,
    url: String,
    headers: Object,
    params: Object,
    onUploadProgress: any,
    responseType: String,
    cancelToken: Boolean,
    param: any,
    data: any
}
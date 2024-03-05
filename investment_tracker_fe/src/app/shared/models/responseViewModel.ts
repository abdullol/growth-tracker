export interface ResponseViewModel<T> {
    statusCode: number;
    message: string;
    data: T;
}

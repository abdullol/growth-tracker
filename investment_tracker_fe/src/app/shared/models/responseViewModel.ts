export interface ResponseViewModel<T> {
    statusCode: number;
    message: string;
    totalRecords: number;
    data: T;
}

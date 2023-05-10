export interface ItemsModel {
    id: string,
    title : string,
    referenceNo: number,
    stock: number,
    date: string,
    checked?: boolean,
    filtered?: boolean,
}
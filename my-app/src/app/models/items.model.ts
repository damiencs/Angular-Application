export interface ItemsModel {
  id: string;
  title: string;
  referenceNo: number;
  stock: number;
  destination: string;
  date: string;
  checked?: boolean;
  filtered?: boolean;
}

export interface Product {
  id: string;
  name: string;
  quantity: number;
  weight?: number;
}

export interface WriteOffReason {
  id: string;
  code: string;
  label: string;
}

export interface WriteOffCategory {
  id: string;
  code: string;
  label: string;
}
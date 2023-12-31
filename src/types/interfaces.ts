export interface Cart {
  cid: string;
  products: Array<Product>;
}

export interface Product {
  id: number;
  qty: number;
}

export interface DisplayCart {
  name: string;
  price: number;
  currency: string;
  qty: number;
  isStock: boolean;
  id: number;
  color: string;
}

export interface Person {
  id: number;
  name: string;
  emial: string;
  contact: string;
}

export interface EmittedValue {
  id?: number;
  key: "name" | "contact" | "email";
  value: string | number;
}

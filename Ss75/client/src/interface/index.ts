export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    image: string;
    description: string;
}

export interface State {
    products: {
        products: Product[];
    }
}
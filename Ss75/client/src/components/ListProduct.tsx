import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../services/product.service";
import { State } from "../interface";

export default function ListProduct() {
    const dispatch = useDispatch();
    const products = useSelector((state: State) => state.products.products);

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    return (
        <div className="border-[1px] p-6 rounded">
            <strong className="text-2xl">List Product</strong>
            <div className="flex flex-col gap-10 mt-4">
                {
                    products.map((product) => {
                        return (
                            <div key={product.id} className="flex gap-5 border-[1px] p-2 rounded">
                                <img className="w-[100px]" src={product.image} alt={product.name} />
                                <div className="flex flex-col gap-2">
                                    <strong>{product.name}</strong>
                                    <p className="w-[200px]">{product.description}</p>
                                    <strong>Total: {product.stock}</strong>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <input className="w-[110px] border-[1px] rounded p-1 pl-2" defaultValue={1} min={1} type="number" />
                                    <p>Price: $ {product.price}</p>
                                    <button className="bg-blue-600 text-white rounded p-1 pl-2 pr-2">Add to cart</button>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

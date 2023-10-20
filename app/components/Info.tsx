"use client"

import Button from "./Button";

import { Product } from "@/types";
import { AiOutlineShoppingCart } from "react-icons/ai";
import useCart from "../hooks/useCart";

interface InfoProps {
    data: Product;
}

const Info: React.FC<InfoProps> = ({
    data
}) => {
    
    const cart = useCart();
    
    const addToCart = () => {
        cart.addItem(data)
    }
    
    return ( 
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>

            <div className=" mt-3 flex items-end justify-between">
                <p className="text-2xl text-gray-900">
                    ${data.price}
                </p>
            </div>

            <hr className="my-4" />

            <div className="flex flex-col space-y-6">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Size:</h3>
                    <div>
                        {data.size.name}
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Color:</h3>
                    <div className="w-6 h-6 rounded-full border"
                        style={{ backgroundColor: data.color.value }}
                    />
                </div>
            </div>

            <div className="mt-10 flex items-center gap-x-3">
                <Button onClick={addToCart} className="flex items-center gap-x-2">
                    Add To Cart
                    <AiOutlineShoppingCart size={20} />
                </Button>
            </div>
        </div>
     );
}
 
export default Info;
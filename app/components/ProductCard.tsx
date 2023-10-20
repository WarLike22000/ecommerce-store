"use client"

import Image from "next/image";
import IconButton from "./IconButton";

import { Product } from "@/types";
import { BiExpand } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import usePreviewModal from "../hooks/usePreviewModal";
import useCart from "../hooks/useCart";

interface ProductCardProps {
    data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({
    data
}) => {

    const previewModal = usePreviewModal();
    const cart = useCart();

    const router = useRouter();
    const handleClick = () => {
        router.push(`/product/${data?.id}`)
    }

    const orPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        previewModal.onOpen(data);
    };
    
    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        cart.addItem(data);
    };
    
    return ( 
        <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
            <div className="aspect-square rounded-xl bg-gray-100 relative overflow-hidden">
                <Image 
                    src={data.image[0]}
                    alt="image"
                    fill
                    className="aspect-square object-cover"
                />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton
                            onClick={orPreview}
                            icon={<BiExpand size={20} className="text-gray-600" />}
                        />
                        <IconButton
                            onClick={onAddToCart}
                            icon={<AiOutlineShoppingCart size={20} className="text-gray-600" />}
                        />
                    </div>
                </div>
            </div>

            <div>
                <p className="font-semibold text-lg">
                    {data.name}
                </p>
                <p className="text-sm text-gray-500">
                    {data.category.name}
                </p>
            </div>

            <div className="flex items-center justify-between">
                <p className="font-semibold">
                    ${data.price}
                </p>
            </div>
        </div>
     );
}
 
export default ProductCard;
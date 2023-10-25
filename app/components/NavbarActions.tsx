"use client"

import Button from "./Button";

import { useEffect, useState } from "react";

import { FiShoppingBag } from "react-icons/fi";
import useCart from "../hooks/useCart";
import { useRouter } from "next/navigation";

const NavbarActions = () => {

    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setIsMounted(true)
    }, []);
    
    const cart = useCart();

    if(!isMounted) {
        return null;
    };
    
    
    return ( 
        <div className="flex items-center gap-x-4">
            <Button onClick={() => router.push("/cart")} className="flex items-center">
                <FiShoppingBag
                    size={17}
                    color="white"
                />
                <span className="ml-2 text-sm font-medium text-white">
                    {cart.items.length}
                </span>
            </Button>
        </div>
     );
}

export default NavbarActions;
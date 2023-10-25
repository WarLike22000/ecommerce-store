"use client"

import Link from "next/link";

import { Category } from "@/types";
import { usePathname } from "next/navigation";

interface MainNavProps {
    data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({
    data
}) => {

    const pathname = usePathname();

    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`
    }));
    
    return ( 
        <nav className="mx-6 items-center hidden md:flex space-x-4 lg:space-x-6">
            {routes.map((route) => (
                <Link
                    key={route.href}
                    href={route.href}
                    className={
                        `text-sm font-medium transition-colors text-gray-400 hover:text-gray-900 ${route.active && "text-gray-900"}`
                    }
                >
                    {route.label}
                </Link>
            ))}
        </nav>
     );
}
 
export default MainNav;
"use client"

import { Category } from "@/types";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

interface MainNavProps {
    data: Category[];
}

const Drawer: React.FC<MainNavProps> = ({
    data
}) => {

    const [isOpen, setIsOpen] = useState(false);

    const onClose = () => {
        setIsOpen(false);
    }

    const onOpen = () => {
        setIsOpen(true);
    }
    
    const pathname = usePathname();

    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`
    }));
    
    return ( 
        <div className="md:hidden flex mx-4">
            <div onClick={onOpen} className="cursor-pointer">
                <AiOutlineMenu size={20} />
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={onClose}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-200"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className='fixed inset-0 overflow-auto'>
                        <div className="fixed inset-y-0 right-0 overflow-hidden">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-300"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-200"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="bg-white w-full h-full max-w-md p-5">
                                    <div className="flex flex-col gap-5 w-full">
                                        {routes.map((route) => (
                                            <Link
                                                key={route.href}
                                                href={route.href}
                                                className={
                                                    `text-sm font-medium bg-slate-100 rounded-md p-2 w-full transition-colors outline-none text-gray-400 hover:text-gray-900 ${route.active && "text-gray-900"}`
                                                }
                                                onClick={onClose}
                                            >
                                                {route.label}
                                            </Link>
                                        ))}
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
     );
}
 
export default Drawer;
"use client"

import Button from "@/app/components/Button";
import IconButton from "@/app/components/IconButton";

import { Color, Size } from "@/types";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import Filter from "./Filter";

interface MobileFiltersProps {
    sizes: Size[];
    colors: Color[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({
    sizes,
    colors
}) => {

    const [open, setOpen] = useState(false);

    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);
    
    return ( 
        <>
            <Button onClick={onOpen} className="lg:hidden text-sm flex items-center gap-x-2 w-fit">
                Filters
                <AiOutlinePlus size={14} />
            </Button>

            <Dialog open={open} as="div" className="relative z-40 lg:hidden" onClose={onClose}>
                <div className="fixed inset-0 bg-black bg-opacity-25" />

                <div className="fixed inset-0 z-40 flex">
                    <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                        <div className="flex items-center justify-end px-4">
                            <IconButton onClick={onClose} icon={<AiOutlineClose size={16} />} />
                        </div>

                        <div className="p-4">
                            <Filter
                                valueKey="sizeId"
                                name="Sizes"
                                data={sizes}
                            />
                            <Filter
                                valueKey="colorId"
                                name="Colors"
                                data={colors}
                            />
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
     );
}
 
export default MobileFilters;
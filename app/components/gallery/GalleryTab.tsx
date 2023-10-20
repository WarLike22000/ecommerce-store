"use client"

import { Tab } from "@headlessui/react";
import Image from "next/image";

interface GalleryTabProps {
    image: string;
}

const GalleryTab: React.FC<GalleryTabProps> = ({
    image
}) => {
    return ( 
        <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
            {({ selected }) => (
                <div>
                    <span className="absolute w-full h-full aspect-square items-center justify-center inset-0 overflow-hidden rounded-md">
                        <Image
                            fill
                            src={image}
                            alt=""
                            className="object-cover object-center"
                        />
                    </span>
                    <span
                        className={`absolute inset-0 rounded-md ring-2 ring-offset-2
                            ${selected ? "ring-black" : "ring-transparent"}
                        `}
                    />
                </div>
            )}
        </Tab>
     );
}
 
export default GalleryTab;
"use client"

import qs from "query-string";
import clsx from "clsx";

import { Color, Size } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/app/components/Button";

interface FilterProps {
    data: (Size | Color)[];
    name: string;
    valueKey: string;
}

const Filter: React.FC<FilterProps> = ({
    data,
    name,
    valueKey
}) => {

    const searchParams = useSearchParams();
    const router = useRouter();

    const selectedValue = searchParams.get(valueKey);

    const onClick = (id: string) => {
        const current = qs.parse(searchParams.toString());

        const query = {
            ...current,
            [valueKey]: id
        }

        if(current[valueKey] === id) {
            query[valueKey] = null
        };

        const url = qs.stringifyUrl({
            url: window.location.href,
            query
        }, { skipNull: true })

        router.push(url, { scroll: false });
    }
    
    return ( 
        <div className="mb-8 bg-white">
            <h3 className="text-lg font-semibold">
                {name}
            </h3>
            <hr className="my-4" />
            <div className="flex flex-wrap gap-2">
                {data.map((filter) => (
                    <div key={filter.id} className="flex items-center bg-white">
                        <Button
                            className={clsx("rounded-md text-sm text-zinc-900 p-2 bg-slate-50 border border-gray-300",
                            selectedValue === filter.id && "bg-zinc-900 text-slate-50"
                            )}
                            onClick={() => onClick(filter.id)}
                        >
                            {filter.name}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Filter;
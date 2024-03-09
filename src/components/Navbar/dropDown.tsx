import { useState, useEffect, useRef } from "react";
import { ChevronUp, ChevronDown } from 'lucide-react';

const DropValue = () => {
    const [open, setOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        window.addEventListener("click", handleOutsideClick);

        return () => {
            window.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    const handleOpen = () => {
        setOpen(!open);
    }

    return (
        <div className="relative" ref={dropdownRef}>
            <div className="flex items-center cursor-pointer" onClick={handleOpen}>
                Shop {open ? <ChevronUp /> : <ChevronDown /> }
            </div>

            {open &&
                <ul className="mt-2 border border-gray-300 rounded-md shadow-md bg-white absolute duration-300 delay-[50] transition-all hover:bg-gray-300 ">
                    <li className="py-2 px-4 cursor-pointer hover:bg-gray-100">Casual</li>
                    <li className="py-2 px-4 cursor-pointer hover:bg-gray-100">Hoodie</li>
                    <li className="py-2 px-4 cursor-pointer hover:bg-gray-100">Jeans</li>
                    <li className="py-2 px-4 cursor-pointer hover:bg-gray-100">Shoes</li>
                </ul>
            }

        </div>
    )
}

export default DropValue;


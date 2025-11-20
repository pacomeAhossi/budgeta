'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
    label: string;
    href: string;
};


const navItems: NavItem[] = [
    {label: 'Features', href: '/features'},
    {label: 'Revolutionize', href: '/revolutionize'},
    {label: 'Reviews', href: '/reviews'},
]
export default function(){
    const pathname = usePathname();
    console.log(pathname);
    
    return(
        <nav className="px-6 py-6 bg-[#252525] rounded-[50px] ">
            <ul className="flex items-center gap-8">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;

                    return(
                        <li key={item.href}>
                            <Link href={item.href} className={` text-white font-medium tracking-[0.05em] transition-colors duration-200 hover:text-budgeta-green ${isActive ? 'text-budgeta-green' : ''} `}>
                                {item.label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
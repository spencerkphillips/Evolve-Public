'use client'
import NextLink from 'next/link';
export default function NavItem({to, className, title}) {
    return (
        <li className="">
            <NextLink className={`${className} block py-2 px-3 rounded md:p-0 hover:text-cyan-500`} href={to} passHref>
                {title}
            </NextLink>
        </li>
    );
}
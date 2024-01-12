'use client'
import NextLink from "next/link";
import Image from "next/image";


export default function Navbar({to, imageSRC, imageWidth, imageHeight, altText}) {
    return (
        <li className="">
            <NextLink className={`flex tracking-wide no-underline px-3 py-6 font-bold`} href={`${to}`} passHref>
                <Image className="" src={`${imageSRC}`} width={`${imageWidth}`} height={`${imageHeight}`} alt={`${altText}`} />
                Text
            </NextLink>
        </li>
    );
}
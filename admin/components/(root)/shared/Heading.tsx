'use client'

export default function Heading({heading, classes}) {
    return (
        <h1 className={`${classes} text-4xl sm:text-5xl tracking-tight font-extrabold max-w-2xl mb-6`}>{heading}</h1>
    );
}
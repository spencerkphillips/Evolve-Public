'use client'

export default function HighlightedHeading({headingFirst, highlighted, headingLast, classes, highlightedClasses}) {
    return (
        <h1 className={`${classes} text-4xl sm:text-5xl tracking-tight font-extrabold max-w-2xl mb-6`}>{headingFirst} <span className={highlightedClasses}>{highlighted}</span> {headingLast}</h1>
    );
}
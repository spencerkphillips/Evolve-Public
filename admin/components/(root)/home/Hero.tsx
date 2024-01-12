'use client'

import dynamic from "next/dynamic";
import { FaArrowRight } from "react-icons/fa"
import NextLink from "next/link";
import Image from "next/image";
import React, { useRef, useState } from "react";
import HighlightedHeading from "../shared/HighlightedHeading"

export default function Hero() {
    return (
        <div className="dark:bg-zinc-950 bg-zinc-50 ease-in-out">
            <div className="py-8 lg:py-16 px-4 gap-8 grid-cols-1 md:grid-cols-6 lg:grid-cols-12 max-w-7xl grid mx-auto">
                <div className="md:col-span-7 place-self-center mr-auto">
                    <HighlightedHeading headingFirst="A" highlighted="content ready" headingLast="CMS for the creators!" classes="" highlightedClasses="text-cyan-400" />
                    <p className="sm:text-lg md:text-xl font-light max-w-2xl mb-6 md:mb-10">Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value.</p>
                    <div className="block">
                        <NextLink href="#" passHref className="rounded-full mx-2 py-3 px-5 inline-flex justify-center items-center text-base text-center font-medium border-cyan-400 text-cyan-400 hover:border-cyan-500 hover:text-cyan-500 border-4">
                            {`Learn More Now! `}
                            <svg className="w-5 -mr-1 ml-1 my-2 block align-middle" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </NextLink>
                        <NextLink href="#" passHref className="rounded-full my-2 md:my-0 mx-2 py-3 px-5 inline-flex justify-center items-center text-base text-center font-medium border-cyan-400 bg-cyan-400 hover:bg-cyan-500 hover:border-cyan-500 text-white hover:text-white border-4">
                            {`Create More With Evolve! `}
                            <svg className="w-5 -mr-1 ml-1 my-2 block align-middle" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </NextLink>
                        <p className="text-small mt-2">By using Evolve, you agree to <NextLink href="#" className="text-cyan-400" passHref>license</NextLink> and <NextLink href="#" className="text-cyan-400" passHref>privacy statement.</NextLink></p>
                    </div>
                </div>
                <div className="md:flex md:mt-0 md:col-span-5 hidden">
                    <Image src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/text-editor-dark.svg" width="400" height="360" alt="example image" className="rounded-lg max-w-full h-auto" />
                </div>
            </div>
            <h3 className="text-center font-semibold py-4 leading-5 text-lg mb-1">Officual Partners With</h3>
            <div className="pb-8 md:pb-16 px-4 gap-8 sm:gap-12 md:grid-cols-5 grid-cols-2 max-w-7xl grid mx-auto">
                <NextLink href="#" className="justify-center flex" passHref><svg id="logo-332" xmlns="http://www.w3.org/2000/svg" className="h-8 block align-middle" fill="none" viewBox="0 0 82 40"><path fill="#FFD43D" d="M73.365 19.71c0 2.904-2.241 5.31-5.27 5.31-3.03 0-5.228-2.406-5.228-5.31 0-2.905 2.199-5.312 5.228-5.312s5.27 2.407 5.27 5.311Z"></path><path fill="#FF0C81" d="M48.764 19.544c0 2.946-2.323 5.145-5.27 5.145-2.904 0-5.227-2.2-5.227-5.145 0-2.947 2.323-5.104 5.228-5.104 2.946 0 5.27 2.158 5.27 5.104Z"></path><path fill="#11EEFC" d="M20.074 25.02c3.029 0 5.27-2.406 5.27-5.31 0-2.905-2.241-5.312-5.27-5.312-3.03 0-5.228 2.407-5.228 5.311 0 2.905 2.199 5.312 5.228 5.312Z"></path><path className="fill-zinc-950 dark:fill-zinc-50" d="M68.095 30.54c-6.307 0-11.12-4.897-11.12-10.872 0-5.934 4.855-10.83 11.12-10.83 6.349 0 11.162 4.938 11.162 10.83 0 5.975-4.855 10.871-11.162 10.871Zm0-5.52c3.03 0 5.27-2.406 5.27-5.31 0-2.905-2.24-5.312-5.27-5.312-3.029 0-5.228 2.407-5.228 5.311 0 2.905 2.199 5.312 5.228 5.312ZM43.08 40c-4.813 0-8.506-2.116-10.373-5.934l4.896-2.655c.913 1.784 2.614 3.195 5.394 3.195 3.486 0 5.85-2.448 5.85-6.473v-.374c-1.12 1.411-3.111 2.49-6.016 2.49-5.768 0-10.373-4.481-10.373-10.581 0-5.934 4.813-10.788 11.12-10.788 6.431 0 11.162 4.605 11.162 10.788v8.299C54.74 35.27 49.76 40 43.08 40Zm.415-15.311c2.946 0 5.27-2.2 5.27-5.145 0-2.947-2.324-5.104-5.27-5.104-2.905 0-5.228 2.158-5.228 5.104s2.323 5.145 5.228 5.145ZM20.074 30.54c-6.307 0-11.12-4.897-11.12-10.872 0-5.934 4.854-10.83 11.12-10.83 6.348 0 11.162 4.938 11.162 10.83 0 5.975-4.855 10.871-11.162 10.871Zm0-5.52c3.029 0 5.27-2.406 5.27-5.31 0-2.905-2.241-5.312-5.27-5.312-3.03 0-5.228 2.407-5.228 5.311 0 2.905 2.199 5.312 5.228 5.312ZM0 0h5.892v30H0V0ZM82 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path></svg></NextLink>
                <NextLink href="#" className="justify-center flex" passHref><svg id="logo-87" className="h-8 block align-middle" viewBox="0 0 202 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path  fill-rule="evenodd" clip-rule="evenodd" d="M25.5557 11.6853C23.9112 10.5865 21.9778 10 20 10V0C23.9556 0 27.8224 1.17298 31.1114 3.37061C34.4004 5.56823 36.9638 8.69181 38.4776 12.3463C39.9913 16.0008 40.3874 20.0222 39.6157 23.9018C38.844 27.7814 36.9392 31.3451 34.1421 34.1421C31.3451 36.9392 27.7814 38.844 23.9018 39.6157C20.0222 40.3874 16.0008 39.9913 12.3463 38.4776C8.6918 36.9638 5.56823 34.4004 3.37061 31.1114C1.17298 27.8224 0 23.9556 0 20H10C10 21.9778 10.5865 23.9112 11.6853 25.5557C12.7841 27.2002 14.3459 28.4819 16.1732 29.2388C18.0004 29.9957 20.0111 30.1937 21.9509 29.8078C23.8907 29.422 25.6725 28.4696 27.0711 27.0711C28.4696 25.6725 29.422 23.8907 29.8078 21.9509C30.1937 20.0111 29.9957 18.0004 29.2388 16.1732C28.4819 14.3459 27.2002 12.7841 25.5557 11.6853Z" fill="#007DFC"></path><path  fill-rule="evenodd" clip-rule="evenodd" d="M10 1.47023e-06C10 1.31322 9.74135 2.61358 9.2388 3.82684C8.73625 5.04009 7.99966 6.14248 7.07107 7.07107C6.14249 7.99966 5.0401 8.73625 3.82684 9.2388C2.61358 9.74134 1.31322 10 6.15916e-06 10L5.72205e-06 20C2.62644 20 5.22716 19.4827 7.65368 18.4776C10.0802 17.4725 12.285 15.9993 14.1421 14.1421C15.9993 12.285 17.4725 10.0802 18.4776 7.65367C19.4827 5.22715 20 2.62643 20 -3.8147e-06L10 1.47023e-06Z" fill="#007DFC"></path><path  d="M125.619 14.4525H120.767V29.8648H125.619V14.4525Z" fill="#007DFC"></path><path  d="M121.307 11.5666C121.814 12.074 122.448 12.3277 123.209 12.3277C123.97 12.3277 124.594 12.074 125.08 11.5666C125.567 11.0381 125.81 10.4038 125.81 9.66385C125.81 8.90277 125.567 8.26849 125.08 7.76111C124.594 7.25369 123.97 7 123.209 7C122.448 7 121.814 7.25369 121.307 7.76111C120.82 8.26849 120.577 8.90277 120.577 9.66385C120.577 10.4038 120.82 11.0381 121.307 11.5666Z" fill="#007DFC"></path><path  d="M51.1562 29.8648V7.47568H56.1351V25.4885H66.0612V29.8648H51.1562Z" fill="#007DFC"></path><path  fill-rule="evenodd" clip-rule="evenodd" d="M75.0274 30.2136C73.4418 30.2136 72.0042 29.8648 70.7145 29.1671C69.446 28.4483 68.4418 27.4758 67.7018 26.2495C66.9619 25.0233 66.5919 23.6491 66.5919 22.1269C66.5919 20.6047 66.9619 19.2411 67.7018 18.036C68.4418 16.8309 69.446 15.8795 70.7145 15.1819C71.983 14.463 73.4207 14.1036 75.0274 14.1036C76.6342 14.1036 78.0718 14.4525 79.3403 15.1501C80.6088 15.8478 81.6131 16.8098 82.353 18.036C83.093 19.2411 83.463 20.6047 83.463 22.1269C83.463 23.6491 83.093 25.0233 82.353 26.2495C81.6131 27.4758 80.6088 28.4483 79.3403 29.1671C78.0718 29.8648 76.6342 30.2136 75.0274 30.2136ZM75.0274 25.8056C75.7251 25.8056 76.3382 25.6576 76.8668 25.3616C77.3953 25.0445 77.797 24.6111 78.0718 24.0614C78.3678 23.4906 78.5158 22.8457 78.5158 22.1269C78.5158 21.4081 78.3678 20.7844 78.0718 20.2559C77.7758 19.7062 77.3636 19.2834 76.835 18.9874C76.3276 18.6702 75.7251 18.5117 75.0274 18.5117C74.3509 18.5117 73.7484 18.6702 73.2198 18.9874C72.6913 19.2834 72.279 19.7062 71.983 20.2559C71.687 20.8056 71.5391 21.4398 71.5391 22.1586C71.5391 22.8563 71.687 23.4906 71.983 24.0614C72.279 24.6111 72.6913 25.0445 73.2198 25.3616C73.7484 25.6576 74.3509 25.8056 75.0274 25.8056Z" fill="#007DFC"></path><path  fill-rule="evenodd" clip-rule="evenodd" d="M87.3057 35.8902C88.5953 36.4821 90.0858 36.7781 91.7772 36.7781C93.4262 36.7781 94.8956 36.4504 96.1852 35.795C97.4749 35.1396 98.4896 34.2306 99.2296 33.0678C99.9695 31.905 100.34 30.5308 100.34 28.9451V14.4525H95.5826V15.488C95.2288 15.1902 94.827 14.9402 94.3776 14.7379C93.553 14.3362 92.6122 14.1353 91.5552 14.1353C90.1387 14.1353 88.8807 14.4736 87.7814 15.1501C86.6819 15.8055 85.8152 16.7146 85.1809 17.8774C84.5466 19.0191 84.2296 20.3087 84.2296 21.7464C84.2296 23.1629 84.5466 24.4525 85.1809 25.6153C85.8152 26.7781 86.6819 27.6978 87.7814 28.3743C88.8807 29.0508 90.1387 29.3891 91.5552 29.3891C92.5911 29.3891 93.5319 29.1883 94.3776 28.7866C94.7872 28.592 95.1572 28.3627 95.4875 28.0986V29.072C95.4875 30.1502 95.1387 30.9853 94.441 31.5773C93.7645 32.1693 92.8237 32.4652 91.6186 32.4652C90.6461 32.4652 89.811 32.2961 89.1133 31.9578C88.4368 31.6196 87.8236 31.1227 87.2739 30.4673L84.293 33.4483C85.0329 34.5054 86.0372 35.3194 87.3057 35.8902ZM94.219 24.6322C93.7327 24.9282 93.1514 25.0762 92.4748 25.0762C91.7983 25.0762 91.2063 24.9282 90.6989 24.6322C90.2126 24.3362 89.8321 23.9345 89.5573 23.4271C89.2824 22.8986 89.145 22.3383 89.145 21.7464C89.145 21.1121 89.2824 20.5413 89.5573 20.0339C89.8321 19.5265 90.2232 19.1248 90.7306 18.8288C91.238 18.5328 91.8194 18.3848 92.4748 18.3848C93.1514 18.3848 93.7327 18.5328 94.219 18.8288C94.7264 19.1248 95.1069 19.5265 95.3607 20.0339C95.6355 20.5413 95.7729 21.1121 95.7729 21.7464C95.7729 22.3806 95.6355 22.9514 95.3607 23.4588C95.1069 23.9451 94.7264 24.3362 94.219 24.6322Z" fill="#007DFC"></path><path  fill-rule="evenodd" clip-rule="evenodd" d="M110.551 30.2136C108.965 30.2136 107.527 29.8648 106.238 29.1671C104.969 28.4483 103.965 27.4758 103.225 26.2495C102.485 25.0233 102.115 23.6491 102.115 22.1269C102.115 20.6047 102.485 19.2411 103.225 18.036C103.965 16.8309 104.969 15.8795 106.238 15.1819C107.506 14.463 108.944 14.1036 110.551 14.1036C112.157 14.1036 113.595 14.4525 114.863 15.1501C116.132 15.8478 117.136 16.8098 117.876 18.036C118.616 19.2411 118.986 20.6047 118.986 22.1269C118.986 23.6491 118.616 25.0233 117.876 26.2495C117.136 27.4758 116.132 28.4483 114.863 29.1671C113.595 29.8648 112.157 30.2136 110.551 30.2136ZM110.551 25.8056C111.248 25.8056 111.861 25.6576 112.39 25.3616C112.918 25.0445 113.32 24.6111 113.595 24.0614C113.891 23.4906 114.039 22.8457 114.039 22.1269C114.039 21.4081 113.891 20.7844 113.595 20.2559C113.299 19.7062 112.887 19.2834 112.358 18.9874C111.851 18.6702 111.248 18.5117 110.551 18.5117C109.874 18.5117 109.271 18.6702 108.743 18.9874C108.214 19.2834 107.802 19.7062 107.506 20.2559C107.21 20.8056 107.062 21.4398 107.062 22.1586C107.062 22.8563 107.21 23.4906 107.506 24.0614C107.802 24.6111 108.214 25.0445 108.743 25.3616C109.271 25.6576 109.874 25.8056 110.551 25.8056Z" fill="#007DFC"></path><path  fill-rule="evenodd" clip-rule="evenodd" d="M137.281 30.1819C136.246 30.1819 135.294 29.9811 134.427 29.5794C133.971 29.368 133.559 29.1156 133.191 28.8222V36.3659H128.402V14.4525H133.254V15.5162C133.606 15.2283 133.997 14.9794 134.427 14.7696C135.294 14.3467 136.246 14.1353 137.281 14.1353C138.74 14.1353 140.03 14.4842 141.15 15.1819C142.292 15.8795 143.18 16.8309 143.814 18.036C144.47 19.2411 144.797 20.6153 144.797 22.1586C144.797 23.702 144.47 25.0762 143.814 26.2813C143.18 27.4864 142.292 28.4377 141.15 29.1354C140.03 29.8331 138.74 30.1819 137.281 30.1819ZM136.394 25.8056C137.091 25.8056 137.694 25.647 138.201 25.3299C138.73 25.0128 139.142 24.5793 139.438 24.0297C139.734 23.48 139.882 22.8563 139.882 22.1586C139.882 21.4398 139.734 20.8056 139.438 20.2559C139.142 19.7062 138.73 19.2834 138.201 18.9874C137.694 18.6702 137.102 18.5117 136.425 18.5117C135.749 18.5117 135.146 18.6702 134.618 18.9874C134.11 19.2834 133.709 19.7062 133.413 20.2559C133.117 20.8056 132.969 21.4398 132.969 22.1586C132.969 22.8563 133.106 23.48 133.381 24.0297C133.677 24.5793 134.089 25.0128 134.618 25.3299C135.146 25.647 135.738 25.8056 136.394 25.8056Z" fill="#007DFC"></path><path  d="M149.546 29.8965C150.434 30.1291 151.332 30.2453 152.241 30.2453C154.165 30.2453 155.687 29.8014 156.808 28.9134C157.949 28.0255 158.52 26.831 158.52 25.3299C158.52 24.3574 158.341 23.5751 157.981 22.9832C157.622 22.3701 157.157 21.8838 156.586 21.5244C156.015 21.165 155.412 20.8795 154.778 20.6681C154.144 20.4567 153.541 20.277 152.971 20.129C152.4 19.981 151.935 19.8119 151.575 19.6216C151.216 19.4313 151.036 19.1776 151.036 18.8605C151.036 18.5645 151.174 18.3425 151.448 18.1945C151.723 18.0254 152.135 17.9409 152.685 17.9409C153.256 17.9409 153.837 18.0571 154.429 18.2897C155.042 18.5222 155.592 18.924 156.078 19.4948L158.837 16.7041C158.14 15.8161 157.231 15.1501 156.11 14.7062C155.011 14.2411 153.806 14.0085 152.495 14.0085C151.248 14.0085 150.159 14.2199 149.229 14.6427C148.298 15.0656 147.579 15.647 147.072 16.3869C146.565 17.1057 146.311 17.962 146.311 18.9557C146.311 19.8859 146.491 20.6576 146.85 21.2707C147.209 21.8626 147.675 22.3278 148.245 22.666C148.816 23.0043 149.419 23.2686 150.053 23.4588C150.687 23.6491 151.29 23.8288 151.861 23.998C152.431 24.146 152.897 24.3257 153.256 24.5371C153.637 24.7274 153.827 25.0128 153.827 25.3933C153.827 25.6893 153.668 25.9218 153.351 26.091C153.055 26.2601 152.622 26.3447 152.051 26.3447C151.226 26.3447 150.465 26.1967 149.768 25.9007C149.07 25.5836 148.467 25.1502 147.96 24.6005L145.201 27.3912C145.73 27.962 146.364 28.4695 147.104 28.9134C147.865 29.3362 148.679 29.6639 149.546 29.8965Z" fill="#007DFC"></path><path  d="M167.368 30.2136C165.952 30.2136 164.694 29.9282 163.595 29.3574C162.516 28.7654 161.671 27.962 161.058 26.9472C160.444 25.9113 160.138 24.7274 160.138 23.3954V14.4525H164.99V23.332C164.99 23.8605 165.074 24.3151 165.244 24.6956C165.434 25.0762 165.709 25.3722 166.068 25.5836C166.428 25.795 166.861 25.9007 167.368 25.9007C168.087 25.9007 168.658 25.6787 169.081 25.2347C169.504 24.7696 169.715 24.1354 169.715 23.332V14.4525H174.567V23.3637C174.567 24.7168 174.261 25.9113 173.647 26.9472C173.034 27.962 172.189 28.7654 171.11 29.3574C170.032 29.9282 168.785 30.2136 167.368 30.2136Z" fill="#007DFC"></path><path  d="M181.831 14.4525H176.979V29.8648H181.831V20.8584C181.831 20.3299 181.937 19.8859 182.148 19.5265C182.381 19.1671 182.688 18.8922 183.068 18.702C183.449 18.4905 183.882 18.3848 184.368 18.3848C185.066 18.3848 185.647 18.6068 186.112 19.0508C186.599 19.4736 186.842 20.0762 186.842 20.8584V29.8648H191.694V20.8584C191.694 20.3299 191.8 19.8859 192.011 19.5265C192.244 19.1671 192.55 18.8922 192.931 18.702C193.311 18.4905 193.745 18.3848 194.231 18.3848C194.929 18.3848 195.51 18.6068 195.975 19.0508C196.461 19.4736 196.704 20.0762 196.704 20.8584V29.8648H201.557V20.3193C201.557 19.0297 201.282 17.9303 200.732 17.0212C200.203 16.0909 199.474 15.3827 198.544 14.8965C197.635 14.389 196.588 14.1353 195.404 14.1353C194.199 14.1353 193.11 14.3996 192.138 14.9282C191.506 15.2649 190.954 15.6995 190.481 16.2319C190.04 15.675 189.504 15.2193 188.871 14.8647C188.026 14.3785 187.064 14.1353 185.986 14.1353C184.844 14.1353 183.819 14.3785 182.91 14.8647C182.514 15.067 182.155 15.3093 181.831 15.5916V14.4525Z" fill="#007DFC"></path></svg></NextLink>
                <NextLink href="#" className="justify-center flex" passHref><svg id="logo-75" className="h-8 block align-middle" viewBox="0 0 186 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M59.0372 2.72868C59.0372 1.33929 60.1758 0.212959 61.5805 0.212959H66.0111C67.0108 0.212959 67.9797 0.555658 68.7527 1.18272L70.1005 2.276L70.1342 2.30641C70.1653 2.29603 70.1964 2.28589 70.2276 2.276C72.6592 1.50561 75.6094 1.3591 78.6205 1.3591C81.6316 1.3591 84.5818 1.50561 87.0134 2.276C87.0446 2.28589 87.0757 2.29603 87.1068 2.30641L87.1405 2.276L88.4883 1.18272C89.2613 0.555658 90.2302 0.212959 91.2299 0.212959H95.6605C97.0652 0.212959 98.2038 1.33929 98.2038 2.72868V4.28386C98.2038 5.48711 97.6914 6.6347 96.7922 7.4451L95.7049 8.42509C95.1741 8.90351 94.537 9.25169 93.845 9.44151L93.5878 9.51207C94.5953 11.89 95.1519 14.4318 95.1519 16.488C95.1519 24.7594 89.978 28.3317 85.4192 31.4793C81.8291 33.9581 78.6205 36.1734 78.6205 40.213C78.6205 36.1734 75.4119 33.9581 71.8218 31.4793C67.263 28.3317 62.0891 24.7594 62.0891 16.488C62.0891 14.4318 62.6457 11.89 63.6532 9.51207L63.396 9.44151C62.704 9.25169 62.0669 8.90351 61.5361 8.42509L60.4488 7.4451C59.5496 6.6347 59.0372 5.48711 59.0372 4.28386V2.72868ZM81.9268 23.2502C81.9268 23.6454 81.7526 24.0243 81.4426 24.3038C81.1326 24.5832 80.7121 24.7402 80.2736 24.7402C79.8951 24.7402 79.5299 24.6231 79.2377 24.4113C79.7351 25.7283 81.008 26.9762 82.9441 24.9694C84.6533 23.1047 82.8681 19.1718 81.1289 16.838C80.5492 16.0601 79.5975 15.6857 78.6205 15.6857C77.6435 15.6857 76.6918 16.0601 76.1121 16.838C74.3729 19.1718 72.5877 23.1047 74.2969 24.9694C76.233 26.9762 77.5059 25.7283 78.0033 24.4113C77.7111 24.6231 77.3459 24.7402 76.9674 24.7402C76.5289 24.7402 76.1084 24.5832 75.7984 24.3038C75.4884 24.0243 75.3142 23.6454 75.3142 23.2502H81.9268ZM72.2898 11.6081H67.6844L71.3139 14.4828C72.1126 15.1153 73.28 14.9131 73.7742 14.0566C74.3982 12.9752 73.5694 11.6081 72.2898 11.6081ZM84.9512 11.6081H89.5566L85.9271 14.4828C85.1284 15.1153 83.961 14.9131 83.4668 14.0566C82.8428 12.9752 83.6716 11.6081 84.9512 11.6081Z" fill="#72B800"></path><path d="M103.69 28.5463H107.77V13.1563H103.69V28.5463ZM103.69 10.7563H107.77V7.09629H103.69V10.7563Z" className="fill-zinc-950 dark:fill-zinc-50"></path><path d="M110.399 33.5863H114.479V26.8063H114.539C115.409 28.1263 116.819 28.9963 118.979 28.9963C122.939 28.9963 125.639 25.8463 125.639 20.8663C125.639 16.0663 123.029 12.7363 118.949 12.7363C116.849 12.7363 115.409 13.7263 114.419 15.0763H114.329V13.1563H110.399V33.5863ZM118.109 25.6063C115.679 25.6063 114.389 23.7763 114.389 20.9863C114.389 18.2263 115.409 16.0363 117.959 16.0363C120.479 16.0363 121.499 18.0763 121.499 20.9863C121.499 23.8963 120.179 25.6063 118.109 25.6063Z" className="fill-zinc-950 dark:fill-zinc-50"></path><path d="M133.778 28.9963C137.618 28.9963 140.258 27.1363 140.258 24.0463C140.258 20.4463 137.408 19.7263 134.828 19.1863C132.638 18.7363 130.598 18.6163 130.598 17.2963C130.598 16.1863 131.648 15.5863 133.238 15.5863C134.978 15.5863 136.028 16.1863 136.208 17.8363H139.898C139.598 14.7463 137.348 12.7363 133.298 12.7363C129.788 12.7363 127.028 14.3263 127.028 17.6563C127.028 21.0163 129.728 21.7663 132.488 22.3063C134.588 22.7263 136.538 22.8763 136.538 24.3463C136.538 25.4263 135.518 26.1163 133.718 26.1163C131.888 26.1163 130.628 25.3363 130.358 23.5663H126.578C126.818 26.8363 129.308 28.9963 133.778 28.9963Z" className="fill-zinc-950 dark:fill-zinc-50"></path><path d="M155.749 28.5463V13.1563H151.669V22.0363C151.669 24.0763 150.499 25.5163 148.579 25.5163C146.839 25.5163 146.029 24.5263 146.029 22.7263V13.1563H141.979V23.4163C141.979 26.7763 143.899 28.9663 147.319 28.9663C149.479 28.9663 150.679 28.1563 151.729 26.7463H151.819V28.5463H155.749Z" className="fill-zinc-950 dark:fill-zinc-50"></path><path d="M158.388 28.5463H162.468V19.6063C162.468 17.5663 163.578 16.2463 165.228 16.2463C166.728 16.2463 167.598 17.1463 167.598 18.8863V28.5463H171.678V19.6063C171.678 17.5663 172.728 16.2463 174.438 16.2463C175.938 16.2463 176.808 17.1463 176.808 18.8863V28.5463H180.888V18.1963C180.888 14.8363 179.058 12.7363 175.818 12.7363C173.868 12.7363 172.248 13.7563 171.198 15.4363H171.138C170.388 13.8163 168.828 12.7363 166.878 12.7363C164.748 12.7363 163.248 13.8163 162.408 15.2263H162.318V13.1563H158.388V28.5463Z" className="fill-zinc-950 dark:fill-zinc-50"></path><path d="M0.684082 28.5463H4.76408V7.09629H0.684082V28.5463Z" className="fill-zinc-950 dark:fill-zinc-50"></path><path d="M14.7403 28.9963C19.5103 28.9963 22.7803 25.4563 22.7803 20.8663C22.7803 16.2763 19.5103 12.7363 14.7403 12.7363C9.97025 12.7363 6.70025 16.2763 6.70025 20.8663C6.70025 25.4563 9.97025 28.9963 14.7403 28.9963ZM14.7403 25.8763C12.2203 25.8763 10.8403 23.8663 10.8403 20.8663C10.8403 17.8663 12.2203 15.8263 14.7403 15.8263C17.2303 15.8263 18.6403 17.8663 18.6403 20.8663C18.6403 23.8663 17.2303 25.8763 14.7403 25.8763Z" className="fill-zinc-950 dark:fill-zinc-50"></path><path d="M31.4568 33.7963C33.7368 33.7963 35.7168 33.2563 37.0068 32.0563C38.1468 31.0063 38.8368 29.5363 38.8368 27.3763V13.1563H34.9068V14.7763H34.8468C33.9168 13.4863 32.5068 12.7363 30.5868 12.7363C26.6868 12.7363 23.9268 15.6763 23.9268 20.2663C23.9268 24.9163 27.2868 27.6163 30.7068 27.6163C32.6568 27.6163 33.8268 26.8363 34.7268 25.8163H34.8168V27.4963C34.8168 29.5963 33.7068 30.7063 31.3968 30.7063C29.5068 30.7063 28.6368 29.9563 28.3068 28.9963H24.2568C24.6768 31.9963 27.2568 33.7963 31.4568 33.7963ZM31.3968 24.3463C29.2968 24.3463 27.9168 22.8163 27.9168 20.2063C27.9168 17.6263 29.2968 16.0063 31.3668 16.0063C33.8268 16.0063 35.0268 17.9263 35.0268 20.1763C35.0268 22.4563 33.9768 24.3463 31.3968 24.3463Z" className="fill-zinc-950 dark:fill-zinc-50"></path><path d="M48.7539 28.9963C53.5239 28.9963 56.7939 25.4563 56.7939 20.8663C56.7939 16.2763 53.5239 12.7363 48.7539 12.7363C43.9839 12.7363 40.7139 16.2763 40.7139 20.8663C40.7139 25.4563 43.9839 28.9963 48.7539 28.9963ZM48.7539 25.8763C46.2339 25.8763 44.8539 23.8663 44.8539 20.8663C44.8539 17.8663 46.2339 15.8263 48.7539 15.8263C51.2439 15.8263 52.6539 17.8663 52.6539 20.8663C52.6539 23.8663 51.2439 25.8763 48.7539 25.8763Z" className="fill-zinc-950 dark:fill-zinc-50"></path><path d="M180.704 9.79629C180.704 9.10593 181.263 8.54629 181.954 8.54629H184.454C185.144 8.54629 185.704 9.10593 185.704 9.79629C185.704 10.4866 185.144 11.0463 184.454 11.0463H181.954C181.263 11.0463 180.704 10.4866 180.704 9.79629Z" className="fill-zinc-950 dark:fill-zinc-50"></path></svg></NextLink>
                <NextLink href="#" className="justify-center flex" passHref><svg id="logo-79" className="h-8 block align-middle" viewBox="0 0 125 40" fill="none" xmlns="http://www.w3.org/2000/svg">  <path d="M88.861 37.225c.759 0 1.208-.575 1.208-1.474 0-.932-.482-1.474-1.192-1.474-.406 0-.688.18-.899.466h-.01V33.27h-.44v3.873h.44v-.368h.01c.228.314.504.45.883.45Zm-.032-.369c-.596 0-.889-.471-.889-1.1 0-.606.282-1.105.894-1.105.531 0 .786.477.786 1.105 0 .634-.255 1.1-.791 1.1Zm1.983 1.214c.341 0 .558-.12.785-.7l1.198-3.028h-.466l-.64 1.745c-.086.233-.184.547-.184.547h-.01s-.104-.314-.19-.547l-.661-1.745h-.477l1.094 2.72-.108.276c-.108.271-.233.342-.417.342a.616.616 0 0 1-.298-.06h-.022v.39c.12.049.228.06.396.06Zm3.106-.927h.737V33.27h-.737v3.873Zm2.539.082c.861 0 1.452-.64 1.452-1.469 0-.829-.59-1.468-1.452-1.468-.861 0-1.452.64-1.452 1.468 0 .83.59 1.469 1.452 1.469Zm0-.564c-.455 0-.704-.363-.704-.905 0-.541.249-.91.704-.91.45 0 .704.369.704.91 0 .542-.254.905-.704.905Zm3.019 1.43c.412 0 .769-.097 1.002-.314.206-.19.331-.455.331-.845v-2.568h-.71v.293h-.011c-.168-.233-.422-.369-.77-.369-.703 0-1.202.531-1.202 1.36 0 .84.607 1.327 1.225 1.327.352 0 .563-.14.725-.325h.017v.304c0 .379-.2.58-.618.58-.341 0-.498-.136-.558-.31h-.731c.075.542.541.867 1.3.867Zm-.01-1.706c-.38 0-.63-.276-.63-.748 0-.466.25-.758.624-.758.444 0 .661.346.661.753 0 .412-.19.753-.656.753Zm3.134.84c.861 0 1.452-.64 1.452-1.469 0-.829-.591-1.468-1.452-1.468-.862 0-1.452.64-1.452 1.468 0 .83.59 1.469 1.452 1.469Zm0-.564c-.455 0-.705-.363-.705-.905 0-.541.25-.91.705-.91.449 0 .704.369.704.91 0 .542-.255.905-.704.905Zm1.794.482h.737v-2.779h-.737v2.78Zm0-3.212h.737v-.661h-.737v.66Zm1.212 4.122h.737V36.83h.01c.158.239.412.396.802.396.715 0 1.203-.57 1.203-1.469 0-.867-.471-1.468-1.208-1.468a.972.972 0 0 0-.818.423h-.016v-.347h-.71v3.69Zm1.392-1.44c-.439 0-.672-.331-.672-.835 0-.498.185-.894.645-.894.455 0 .639.368.639.894s-.238.834-.612.834Zm2.83.612c.693 0 1.17-.336 1.17-.894 0-.65-.515-.78-.981-.878-.395-.081-.763-.103-.763-.341 0-.2.189-.31.476-.31.315 0 .504.11.537.407h.666c-.054-.558-.46-.92-1.192-.92-.634 0-1.132.286-1.132.888 0 .606.487.742.986.84.379.075.731.102.731.368 0 .195-.184.32-.509.32-.33 0-.558-.141-.607-.461h-.682c.043.59.493.98 1.3.98Zm3.968-.082v-2.779h-.737v1.604c0 .368-.212.628-.558.628-.314 0-.461-.179-.461-.504v-1.728h-.731v1.853c0 .607.347 1.002.964 1.002.39 0 .607-.146.797-.4h.016v.324h.71Zm.476 0h.737V35.53c0-.369.2-.607.498-.607.271 0 .428.163.428.477v1.744h.737V35.53c0-.369.19-.607.499-.607.271 0 .428.163.428.477v1.744h.737v-1.869c0-.607-.331-.986-.916-.986-.352 0-.645.184-.834.488h-.011a.83.83 0 0 0-.77-.488.908.908 0 0 0-.807.45h-.016v-.374h-.71v2.78Z" fill="#E5708C"></path>  <path d="M118.481 2.149c0-1.183.959-2.143 2.142-2.143h1.429a2.142 2.142 0 0 1 0 4.286h-1.429a2.142 2.142 0 0 1-2.142-2.143ZM58.49 14.29c0 7.888-6.394 14.283-14.283 14.283-7.888 0-14.283-6.395-14.283-14.283C29.924 6.4 36.319.007 44.207.007 52.096.007 58.49 6.4 58.49 14.29Zm-31.352-.071c.79 0 1.436.64 1.357 1.426A14.283 14.283 0 1 1 12.857.007c.785-.08 1.426.568 1.426 1.356V12.79c0 .79.64 1.429 1.429 1.429h11.426ZM78.487 31.43a4.285 4.285 0 1 1 0 8.57h-7.141a4.285 4.285 0 0 1 0-8.57h7.141Zm-4.285-2.857c7.889 0 14.284-6.395 14.284-14.283a14.22 14.22 0 0 0-1.789-6.925l2.36-2.36a2.928 2.928 0 1 0-4.142-4.14l-2.06 2.06A14.22 14.22 0 0 0 74.201.006C66.314.007 59.92 6.4 59.92 14.29c0 7.888 6.395 14.283 14.283 14.283Zm44.279-14.283c0 7.888-6.395 14.283-14.284 14.283-7.888 0-14.283-6.395-14.283-14.283 0-7.89 6.395-14.283 14.283-14.283 7.889 0 14.284 6.394 14.284 14.283Z" fill="url(#gradient_a1234)"></path>  <defs>    <linearGradient id="gradient_a1234" x1="0" y1="16" x2="119" y2="16" gradientUnits="userSpaceOnUse">      <stop stop-color="#64C2DB"></stop>      <stop offset=".307" stop-color="#7476ED"></stop>      <stop offset=".604" stop-color="#C994DF"></stop>      <stop offset="1" stop-color="#E56F8C"></stop>    </linearGradient>  </defs></svg></NextLink>
                <NextLink href="#" className="justify-center flex" passHref><svg id="logo-54" className="h-8 block align-middle" viewBox="0 0 170 41" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M51.8601 28.138H63.8121V24.538H56.1081V10.978H51.8601V28.138Z" className="fill-zinc-950 dark:fill-zinc-50"></path> <path d="M70.8932 25.738C69.1892 25.738 68.3012 24.25 68.3012 22.018C68.3012 19.786 69.1892 18.274 70.8932 18.274C72.5972 18.274 73.5092 19.786 73.5092 22.018C73.5092 24.25 72.5972 25.738 70.8932 25.738ZM70.9172 28.522C74.8772 28.522 77.4692 25.714 77.4692 22.018C77.4692 18.322 74.8772 15.514 70.9172 15.514C66.9812 15.514 64.3412 18.322 64.3412 22.018C64.3412 25.714 66.9812 28.522 70.9172 28.522Z" className="fill-zinc-950 dark:fill-zinc-50"></path> <path d="M84.3237 32.386C86.1477 32.386 87.7557 31.978 88.8357 31.018C89.8197 30.13 90.4677 28.786 90.4677 26.938V15.85H86.7237V17.17H86.6757C85.9557 16.138 84.8517 15.49 83.2197 15.49C80.1717 15.49 78.0597 18.034 78.0597 21.634C78.0597 25.402 80.6277 27.466 83.3877 27.466C84.8757 27.466 85.8117 26.866 86.5317 26.05H86.6277V27.274C86.6277 28.762 85.9317 29.626 84.2757 29.626C82.9797 29.626 82.3317 29.074 82.1157 28.426H78.3237C78.7077 30.994 80.9397 32.386 84.3237 32.386ZM84.2997 24.562C82.8357 24.562 81.8757 23.362 81.8757 21.514C81.8757 19.642 82.8357 18.442 84.2997 18.442C85.9317 18.442 86.7957 19.834 86.7957 21.49C86.7957 23.218 86.0037 24.562 84.2997 24.562Z" className="fill-zinc-950 dark:fill-zinc-50"></path> <path d="M98.166 25.738C96.462 25.738 95.574 24.25 95.574 22.018C95.574 19.786 96.462 18.274 98.166 18.274C99.87 18.274 100.782 19.786 100.782 22.018C100.782 24.25 99.87 25.738 98.166 25.738ZM98.19 28.522C102.15 28.522 104.742 25.714 104.742 22.018C104.742 18.322 102.15 15.514 98.19 15.514C94.254 15.514 91.614 18.322 91.614 22.018C91.614 25.714 94.254 28.522 98.19 28.522Z" className="fill-zinc-950 dark:fill-zinc-50"></path> <path d="M105.884 28.138H109.796V15.85H105.884V28.138ZM105.884 14.146H109.796V10.978H105.884V14.146Z" className="fill-zinc-950 dark:fill-zinc-50"></path> <path d="M111.494 32.194H115.406V26.866H115.454C116.222 27.898 117.35 28.522 118.934 28.522C122.15 28.522 124.286 25.978 124.286 21.994C124.286 18.298 122.294 15.49 119.03 15.49C117.35 15.49 116.15 16.234 115.31 17.338H115.238V15.85H111.494V32.194ZM117.926 25.498C116.246 25.498 115.286 24.13 115.286 22.138C115.286 20.146 116.15 18.634 117.854 18.634C119.534 18.634 120.326 20.026 120.326 22.138C120.326 24.226 119.414 25.498 117.926 25.498Z" className="fill-zinc-950 dark:fill-zinc-50"></path> <path d="M130.655 28.522C133.871 28.522 136.247 27.13 136.247 24.442C136.247 21.298 133.703 20.746 131.543 20.386C129.983 20.098 128.591 19.978 128.591 19.114C128.591 18.346 129.335 17.986 130.295 17.986C131.375 17.986 132.119 18.322 132.263 19.426H135.863C135.671 17.002 133.799 15.49 130.319 15.49C127.415 15.49 125.015 16.834 125.015 19.426C125.015 22.306 127.295 22.882 129.431 23.242C131.063 23.53 132.551 23.65 132.551 24.754C132.551 25.546 131.807 25.978 130.631 25.978C129.335 25.978 128.519 25.378 128.375 24.154H124.679C124.799 26.866 127.055 28.522 130.655 28.522Z" className="fill-zinc-950 dark:fill-zinc-50"></path> <path d="M141.561 28.498C143.265 28.498 144.345 27.826 145.233 26.626H145.305V28.138H149.049V15.85H145.137V22.714C145.137 24.178 144.321 25.186 142.977 25.186C141.729 25.186 141.129 24.442 141.129 23.098V15.85H137.241V23.914C137.241 26.65 138.729 28.498 141.561 28.498Z" className="fill-zinc-950 dark:fill-zinc-50"></path> <path d="M150.75 28.138H154.662V21.25C154.662 19.786 155.382 18.754 156.606 18.754C157.782 18.754 158.334 19.522 158.334 20.842V28.138H162.246V21.25C162.246 19.786 162.942 18.754 164.19 18.754C165.366 18.754 165.918 19.522 165.918 20.842V28.138H169.83V20.146C169.83 17.386 168.438 15.49 165.654 15.49C164.07 15.49 162.75 16.162 161.79 17.65H161.742C161.118 16.33 159.894 15.49 158.286 15.49C156.51 15.49 155.334 16.33 154.566 17.602H154.494V15.85H150.75V28.138Z" className="fill-zinc-950 dark:fill-zinc-50"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M20.6841 40.138C31.7298 40.138 40.6841 31.1837 40.6841 20.138C40.6841 9.09234 31.7298 0.138031 20.6841 0.138031C9.63837 0.138031 0.684082 9.09234 0.684082 20.138C0.684082 31.1837 9.63837 40.138 20.6841 40.138ZM26.9234 9.45487C27.2271 8.37608 26.1802 7.73816 25.2241 8.41933L11.8772 17.9276C10.8403 18.6663 11.0034 20.138 12.1222 20.138L15.6368 20.138V20.1108H22.4866L16.9053 22.0801L14.4448 30.8212C14.1411 31.9 15.1879 32.5379 16.1441 31.8567L29.491 22.3485C30.5279 21.6098 30.3647 20.138 29.246 20.138L23.9162 20.138L26.9234 9.45487Z" fill="#F15757"></path> </svg></NextLink>
            </div>
            <div className="pb-8 md:pb-16 px-4 gap-8 grid-cols-1 md:grid-cols-3 max-w-7xl grid mx-auto">
                <div className="flex justify-center">
                    <svg className="flex-shrink-0 w-8 h-8 mr-3 text-cyan-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clip-rule="evenodd"></path></svg>
                    <div>
                        <h3 className="font-semibold leading-5 text-lg mb-1">Text Here</h3>
                        <p className="font-light m-0">Host code that you don't want to share with the world in private.</p>
                    </div>
                </div>
                <div className="flex justify-center">
                <svg className="flex-shrink-0 w-8 h-8 mr-3 text-cyan-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                    <div>
                        <h3 className="font-semibold leading-5 text-lg mb-1">Text Here</h3>
                        <p className="font-light m-0">Host code that you don't want to share with the world in private.</p>
                    </div>
                </div>
                <div className="flex justify-center">
                <svg className="flex-shrink-0 w-8 h-8 mr-3 text-cyan-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z" clip-rule="evenodd"></path></svg>
                    <div>
                        <h3 className="font-semibold leading-5 text-lg mb-1">Text Here</h3>
                        <p className="font-light m-0">Host code that you don't want to share with the world in private.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
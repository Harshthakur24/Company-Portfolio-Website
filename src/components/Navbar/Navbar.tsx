"use client"
import { Disclosure } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Image from 'next/image';
import Registerdialog from "./Registerdialog";


interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '/', current: false },
    { name: 'About', href: '/about', current: false },
    { name: 'Services', href: '/services', current: false },
    { name: 'Gallery', href: '/gallery', current: false },
    { name: 'FAQs', href: '/faqs', current: false },
]
const navigationMobile: NavigationItem[] = [
    { name: 'Home', href: '/', current: false },
    { name: 'About', href: '/about', current: false },
    { name: 'Services', href: '/services', current: false },
    { name: 'Gallery', href: '/gallery', current: false },
    { name: 'Contact Us', href: '/', current: false },
    { name: 'FAQs', href: '/faqs', current: false }

]


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}



const Navbar = () => {
    const [isDesktop, setIsDesktop] = useState(true);
    useEffect(() => {
        setIsDesktop(window.innerWidth >= 768);

        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const [isOpen, setIsOpen] = React.useState(false);
    const [prevScrollPos, setPrevScrollPos] = React.useState(0);
    const [visible, setVisible] = React.useState(true);

    // Handle smooth scroll for anchor links
    React.useEffect(() => {
        const handleAnchorClick = (e: Event) => {
            const target = e.target as HTMLAnchorElement;
            if (target.hash) {
                e.preventDefault();
                const element = document.querySelector(target.hash);
                if (element) {
                    const navHeight = visible ? document.querySelector('nav')?.getBoundingClientRect().height || 0 : 0;
                    const topBarHeight = document.querySelector('.top-bar')?.getBoundingClientRect().height || 0;
                    const totalOffset = navHeight + topBarHeight;

                    window.scrollTo({
                        top: element.getBoundingClientRect().top + window.pageYOffset - totalOffset,
                        behavior: 'smooth'
                    });
                }
            }
        };

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', handleAnchorClick);
        });

        return () => {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.removeEventListener('click', handleAnchorClick);
            });
        };
    }, [visible]);

    // Scroll visibility handler remains the same
    React.useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const isScrollingUp = prevScrollPos > currentScrollPos;

            if (currentScrollPos > 100) {
                setVisible(isScrollingUp);
            } else {
                setVisible(true);
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <>



            {/* Main Navbar - Add nav tag for reference */}
            <div className={`w-full bg-black text-white hover:text-white shadow-sm transition-transform duration-300 sticky top-0 z-50
                ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
                <Disclosure as="nav">
                    <div className="mx-auto max-w-7xl px-6 lg:py-3 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="flex flex-1 items-center gap-0 md:gap-3 sm:items-stretch sm:justify-start">
                                {/* MAIN LOGO */}
                                <div className="flex w-24 h-16 flex-shrink-0 items-center">
                                    <Image
                                        className="block h-16 w-auto"
                                        src={'/logo-main.png'}
                                        alt="logo"
                                        width={128}
                                        height={64}
                                        priority
                                    />
                                </div>
                                {/* Government Logo - MORTH */}
                                <div className="flex w-16 h-16 flex-shrink-0 items-center mr-4">
                                    <Image
                                        src="/MORTH.jpg"
                                        alt="MORTH logo"
                                        width={64}
                                        height={64}
                                        className="object-contain"
                                    />
                                </div>



                                {/* Government Logo - RVSF */}
                                <div className="flex w-20 h-20 scale-175 flex-shrink-0 items-center md:ml-3 ml-0">
                                    <Image
                                        src="/RVSF.jpg"
                                        alt="RVSF logo"
                                        width={80}
                                        height={80}
                                        className="object-contain h-32"
                                    />
                                </div>

                                {/* LINKS */}
                                <div className="hidden lg:block m-auto">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? ' text-white hover:opacity-100' : 'hover:text-white hover:opacity-100',
                                                    'px-3 py-4 text-lg font-normal opacity-75 space-links'
                                                )}
                                                aria-current={item.href ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>



                            {/* REGISTER DIALOG */}

                            <Registerdialog />


                            {/* DRAWER FOR MOBILE VIEW */}

                            {/* DRAWER ICON */}

                            <div className='block lg:hidden'>
                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                            </div>

                            {/* DRAWER LINKS DATA */}


                        </div>
                    </div>
                </Disclosure>
            </div>

            {/* Drawer remains the same */}
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                <div className="h-full w-full bg-black p-0 m-0">
                    {navigationMobile.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center m-0 justify-between px-4 py-4 text-base font-medium text-white hover:bg-white/10 transition-all duration-200"
                            onClick={() => setIsOpen(false)}
                        >
                            <span>{item.name}</span>
                            <svg
                                className="w-5 h-5 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </Link>
                    ))}
                </div>
            </Drawer>
        </>
    )
}

export default Navbar;

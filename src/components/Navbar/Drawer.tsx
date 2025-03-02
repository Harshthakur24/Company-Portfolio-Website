"use client"
import React, { Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

interface DrawerProps {
    children: React.ReactNode;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export default function Drawer({ children, isOpen, setIsOpen }: DrawerProps) {
    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={setIsOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm bg-black" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden bg-black">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 bg-black">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-300"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-200"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto bg-black w-screen max-w-md">
                                    <div className="flex h-full flex-col overflow-y-auto bg-white">
                                        {/* Header */}
                                        <div className="px-6 pt-6 pb-4 border-b bg-black border-gray-100">
                                            <div className="flex items-center justify-between">
                                                <Image
                                                    src="/logo-main.png"
                                                    alt="Logo"
                                                    width={180}
                                                    height={60}
                                                    className="h-16 w-auto"
                                                />
                                                <button
                                                    type="button"
                                                    className="rounded-full p-2 text-gray-400 hover:bg-gray-50 transition-colors duration-200"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    <XMarkIcon className="h-6 w-6 text-white" />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Navigation Links */}
                                        <div className="flex-1">
                                            {children}
                                        </div>

                                        {/* Contact Info0 */}
                                        <div className="px-6 py-6 border-t border-white/20 bg-black">
                                            <div className="space-y-4">
                                                <a href="tel:+918989898993" className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors duration-200">
                                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                    </svg>
                                                    <span className="text-sm font-medium text-white">+91 89 89 89 89 93                                                    </span>
                                                </a>
                                                <a href="mailto:Blackminingjunk@gmail.com" className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors duration-200">
                                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                    <span className="text-sm font-medium text-white">Blackminingjunk@gmail.com</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}

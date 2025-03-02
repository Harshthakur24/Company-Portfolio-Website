"use client"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Register = () => {
    let [isOpen, setIsOpen] = useState(false)
    const router = useRouter();

    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }

    const handleContactClick = async (e: React.MouseEvent) => {
        e.preventDefault();

        // Check if we're not already on the home page
        if (window.location.pathname !== '/') {
            // First navigate to home page
            await router.push('/');

            // Wait for navigation to complete and DOM to update
            setTimeout(() => {
                const element = document.querySelector('#contact2');
                if (element) {
                    const navHeight = document.querySelector('nav')?.getBoundingClientRect().height || 0;
                    const topBarHeight = document.querySelector('.top-bar')?.getBoundingClientRect().height || 0;
                    const totalOffset = navHeight + topBarHeight;

                    window.scrollTo({
                        top: element.getBoundingClientRect().top + window.pageYOffset - totalOffset,
                        behavior: 'smooth'
                    });
                }
            }, 100); // Small delay to ensure DOM is ready
        } else {
            // If already on home page, just scroll
            const element = document.querySelector('#contact2');
            if (element) {
                const navHeight = document.querySelector('nav')?.getBoundingClientRect().height || 0;
                const topBarHeight = document.querySelector('.top-bar')?.getBoundingClientRect().height || 0;
                const totalOffset = navHeight + topBarHeight;

                window.scrollTo({
                    top: element.getBoundingClientRect().top + window.pageYOffset - totalOffset,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto  sm:pr-0">
                <div className='hidden lg:block'>
                    <a
                        href="#contact2"
                        className="text-blue text-lg font-medium ml-9 py-5 px-16 transition duration-150 ease-in-out rounded-full bg-lightblue hover:text-white hover:bg-blue"
                        onClick={handleContactClick}
                    >
                        Contact Us
                    </a>
                </div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-950/75 backdrop-blur-sm" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-900 p-6 text-left align-middle shadow-xl transition-all border border-gray-800">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-white"
                                    >
                                        Register
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-400">
                                            Register your account here.
                                        </p>
                                    </div>

                                    <form className="mt-4 space-y-4">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                id="password"
                                                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                            />
                                        </div>

                                        <div className="mt-4 flex justify-end space-x-2">
                                            <button
                                                type="button"
                                                className="inline-flex justify-center rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                onClick={closeModal}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            >
                                                Register
                                            </button>
                                        </div>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default Register;

import Image from "next/image";

interface DrawerProps {
    children: React.ReactNode;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const Drawer = ({ children, isOpen, setIsOpen }: DrawerProps) => {
    return (
        <div
            className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out p-0 m-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
        >
            {/* Black background for entire screen */}
            <div
                className={`fixed inset-0 bg-black transition-opacity p-0 m-0 ${isOpen ? 'opacity-100' : 'opacity-0'
                    }`}
                onClick={() => setIsOpen(false)}
            />

            {/* Drawer panel - removed all padding and margins */}
            <div className="w-full absolute top-0 left-0 max-w-sm h-full bg-black shadow-lg p-0 m-0">
                {/* Logo and close button section */}
                <div className="flex items-center justify-between border-b border-white/20 bg-black p-4">
                    <div className="w-24">
                        <Image
                            src="/assets/logo-main.png"
                            alt="Black Mining Logo"
                            width={96}
                            height={48}
                            className="w-full h-auto"
                            priority
                        />
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="rounded-lg text-white p-2"
                    >
                        <span className="sr-only">Close menu</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Content container - removed padding */}
                <div className="h-full bg-black">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Drawer; 
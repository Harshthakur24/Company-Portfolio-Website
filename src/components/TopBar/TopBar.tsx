const TopBar = () => {
    return (
        <div className="bg-black text-white py-2 px-4 text-sm">
            <div className="container mx-auto flex flex-wrap justify-between items-center">
                <div className="flex items-center space-x-6">
                    <span className="hidden sm:inline">Black Mining Co., Ltd</span>
                    <div className="flex items-center space-x-4">
                        <a
                            href="Blackminingjunk@gmail.com"
                            className="hover:text-gray-300 transition-colors duration-300 flex items-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="hidden md:inline">Blackminingjunk@gmail.com</span>
                        </a>
                        <a
                            href="tel:+918989898993"
                            className="hover:text-gray-300 transition-colors duration-300 flex items-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span className="hidden md:inline">+91 89 89 89 89 93</span>
                        </a>
                    </div>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                    <span className="text-gray-400">Mon - Fri: 9:00 - 18:00</span>
                </div>
            </div>
        </div>
    );
};

export default TopBar; 
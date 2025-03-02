"use client"
import Link from "next/link";
import Image from "next/image";

// MIDDLE LINKS DATA
interface ProductType {
    id: number;
    link: Array<{
        name: string;
        path: string;
    }>;
}

const products: ProductType[] = [
    {
        id: 1,
        link: [
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'About', path: '/about' },
            { name: 'Gallery', path: '/gallery' }
        ],
    },
    {
        id: 2,
        link: [
            { name: 'Vehicle Disposal', path: '/services' },
            { name: 'Recycling Process', path: '/services' },
            { name: 'Legal Info', path: '/about' },
            { name: 'Contact', path: '/#contact' }
        ]
    }
]

const footer = () => {
    return (
        <div className="bg-darkblue -mt-40">
            <div className="mx-auto w-full pt-2 md:pt-4 px-4 sm:px-6 lg:px-8">
                <div className="my-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

                    {/* COLUMN-1 */}

                    <div className='col-span-4 md:col-span-12 lg:col-span-4'>
                        <div className="flex gap-2">
                            <Image src={'/logo-main.png'} width={50} height={50} alt="logo" className='pb-8 -mt-1' />
                            <h1 className="text-xl font-bold text-white">Black Mining Junkyard LLP</h1>
                        </div>
                        <div className='flex gap-4'>
                            <Link href="https://facebook.com" className='footer-fb-icons'>
                                <Image src={'/assets/footer/facebook.svg'} alt="facebook" width={15} height={20} />
                            </Link>
                            <Link href="https://twitter.com" className='footer-icons'>
                                <Image src={'/assets/footer/twitter.svg'} alt="twitter" width={20} height={20} />
                            </Link>
                            <Link href="https://www.instagram.com/black.mining.junkyard.llp?utm_source=qr&igsh=aTVsYzNxM3cyamt6" className='footer-icons' target="_blank" rel="noopener noreferrer">
                                <Image src={'/assets/footer/instagram.svg'} alt="instagram" width={20} height={20} />
                            </Link>
                        </div>
                    </div>

                    {/* CLOUMN-2/3 */}

                    {products.map((product) => (
                        <div key={product.id} className="group relative col-span-2 md:col-span-4 lg:col-span-2">
                            <ul>
                                {product.link.map((link, index: number) => (
                                    <li key={index} className='mb-3'>
                                        <Link
                                            href={link.path}
                                            className="text-sm font-normal text-white space-links"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* CLOUMN-4 */}

                    <div className='col-span-4 md:col-span-4 lg:col-span-4'>
                        <div className="flex gap-2">
                            <Image src={'/assets/footer/mask.svg'} alt="mask-icon" width={24} height={24} />
                            <h5 className="text-base font-normal text-offwhite">Khasra no. 103 Barhana Jhajjar</h5>
                        </div>
                        <div className="flex gap-2 mt-10">
                            <Image src={'/assets/footer/telephone.svg'} alt="telephone-icon" width={24} height={24} />
                            <h5 className="text-base font-normal text-offwhite">+91 89 89 89 89 93</h5>
                        </div>
                        <div className="flex gap-2 mt-10">
                            <Image src={'/assets/footer/email.svg'} alt="email-icon" width={24} height={24} />
                            <h5 className="text-base font-normal text-offwhite">Blackminingjunk@gmail.com</h5>
                        </div>
                    </div>

                </div>

                {/* All Rights Reserved */}

                <div className='py-10 lg:flex items-center justify-between border-t border-t-bordertop'>
                    <h4 className='text-offwhite text-sm text-center lg:text-start font-normal'>@2025 Black Mining Junkyard LLP. All Rights Reserved</h4>
                    <div className="flex gap-5 mt-5 lg:mt-0 justify-center lg:justify-start">
                        <h4 className='text-offwhite text-sm font-normal'><Link href="/" target="_blank">Privacy Policy</Link></h4>
                        <div className="h-5 bg-bordertop w-0.5"></div>
                        <h4 className='text-offwhite text-sm font-normal'><Link href="/" target="_blank">Terms & Conditions</Link></h4>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default footer;

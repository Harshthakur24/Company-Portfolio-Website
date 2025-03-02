"use client"
import { HeroParallax } from "@/src/components/ui/hero-parallax"
import { products } from "./data"
import { Aboutdata } from "./data"
import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
    return (
        <main className="mb-40 md:mb-36" style={{
            backgroundImage: 'url("/ffflurry.svg")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundColor: 'black'
        }}>
            <div className="text-center pt-20 md:pt-20">
                <h1 className="text-4xl font-semibold text-white sm:text-6xl lg:text-8xl md:4px lh-96">
                    Services we provide <br />
                </h1>
                <p className="mt-4 text-sm sm:text-md lg:text-lg leading-8 text-white/80">
                    We provide a variety of services to our clients.
                </p>
            </div>
            <div>
                {/*  SERVICE-1 */}
                <div className='mx-auto max-w-7xl px-4 my-2 sm:my-10 py-2 sm:py-6 md:py-20 lg:px-8'>
                    <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>

                        {/* COLUMN-1 */}
                        <div className='col-span-6 flex justify-center'>
                            <div className="flex flex-col align-middle justify-center p-10">
                                <p className="text-3xl md:text-4xl lg:text-6xl pt-4 font-semibold lh-81 mt-5 text-center lg:text-start text-white">1. Certificate for Discount on New Vehicle Purchase</p>
                                <h4 className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-white/80">
                                    Upon scrapping your old vehicle at a Registered Vehicle Scrapping Facility (RVSF), you receive a &apos;Certificate of Deposit&apos;. This certificate entitles you to incentives when purchasing a new vehicle, such as discounts or tax rebates, as outlined in various state policies.
                                </h4>
                                <Link href={'/'} className="mt-4 text-xl font-medium text-blue flex gap-2 mx-auto lg:mx-0 space-links">Our Process <Image src={'/assets/provide/arrow.svg'} alt={'arrow'} width={20} height={20} /></Link>
                            </div>
                        </div>

                        <div className='lg:col-span-1'></div>

                        {/* COLUMN-2 */}
                        <div className='col-span-6 lg:col-span-5'>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 lg:gap-x-40 px-10 py-12 bg-circlebg rounded-3xl'>
                                {Aboutdata.map((item, i) => (
                                    <div key={i} className='bg-white rounded-3xl lg:-ml-32 p-6 shadow-xl'>
                                        <Image src={item.imgSrc} alt={item.imgSrc} width={64} height={64} className="mb-5" />
                                        <h4 className="text-2xl font-semibold">{item.country}</h4>
                                        <h4 className='text-lg font-normal text-bluegray my-2'>{item.paragraph}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
                {/*  SERVICE-2 */}
                <div className='mx-auto max-w-7xl px-4 my-10 sm:py-20 lg:px-8'>
                    <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
                        {/* COLUMN-2 */}
                        <div className='col-span-6 lg:col-span-5'>
                            <div className='gap-x-16 gap-y-10 lg:gap-x-40 px-10 py-12 bg-bluebg rounded-3xl'>
                                <Image
                                    src={'/f9.jpg'}
                                    alt={'marketing'}
                                    width={1500}
                                    height={3000}
                                    className="mb-5 w-full h-[280px] md:h-[400px] object-cover rounded-xl"
                                />
                            </div>
                        </div>
                        <div className='lg:col-span-1'></div>
                        {/* COLUMN-1 */}
                        <div className='col-span-6 flex justify-center'>
                            <div className="flex flex-col align-middle justify-center p-10">
                                <p className="text-3xl md:text-4xl lg:text-6xl pt-4 font-semibold lh-81 mt-5 text-center lg:text-start text-white">2. Convenient Home Pickup Service</p>
                                <h4 className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-white/80">
                                    Many RVSFs provide free doorstep pickup services for vehicles designated for scrapping. This ensures a hassle-free experience, as professionals handle the transportation of your vehicle from your residence to the scrapping facility.
                                </h4>
                                <Link href={'/'} className="mt-4 text-xl font-medium text-blue flex gap-2 mx-auto lg:mx-0 space-links">Our Process <Image src={'/assets/provide/arrow.svg'} alt={'arrow'} width={20} height={20} /></Link>
                            </div>
                        </div>

                    </div>
                </div>
                {/*  SERVICE-3 */}
                <div className='mx-auto max-w-7xl px-4 my-10 sm:py-20 lg:px-8'>
                    <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>

                        {/* COLUMN-1 */}
                        <div className='col-span-6 flex justify-center'>
                            <div className="flex flex-col align-middle justify-center p-10">
                                <p className="text-3xl md:text-4xl lg:text-6xl pt-4 font-semibold lh-81 mt-5 text-center lg:text-start text-white">3. Environmental and Economic Advantages</p>
                                <h4 className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-white/80">
                                    The Government of India&apos;s Vehicle Scrappage Policy aims to phase out unfit and polluting vehicles, thereby reducing environmental pollution and promoting road safety. Additionally, the policy is designed to boost the automotive industry by increasing vehicle sales, which can lead to economic growth and job creation.
                                </h4>
                                <Link href={'/'} className="mt-4 text-xl font-medium text-blue flex gap-2 mx-auto lg:mx-0 space-links">Our Process <Image src={'/assets/provide/arrow.svg'} alt={'arrow'} width={20} height={20} /></Link>
                            </div>
                        </div>

                        <div className='lg:col-span-1'></div>

                        {/* COLUMN-2 */}
                        <div className='col-span-6 lg:col-span-5'>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 lg:gap-x-40 px-10 py-12 bg-[#fae7ac] rounded-3xl'>
                                {Aboutdata.map((item, i) => (
                                    <div key={i} className='bg-white rounded-3xl lg:-ml-32 p-6 shadow-xl'>
                                        <Image src={item.imgSrc} alt={item.imgSrc} width={64} height={64} className="mb-5" />
                                        <h4 className="text-2xl font-semibold">{item.country}</h4>
                                        <h4 className='text-lg font-normal text-bluegray my-2'>{item.paragraph}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
                {/*  SERVICE-4 */}

            </div>

        </main>
    )
}
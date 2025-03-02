"use client"
import Image from "next/image";
import Link from "next/link";

interface datatype {
    imgSrc: string;
    country: string;
    paragraph: string;
}

const Aboutdata: datatype[] = [
    {
        imgSrc: "/assets/provide/marketing.svg",
        country: "Vehicle Assessment",
        paragraph: 'Professional evaluation of your vehicle condition and fair market value',
    },
    {
        imgSrc: "/assets/provide/graphic.svg",
        country: "Legal Documentation",
        paragraph: 'Complete handling of all disposal paperwork and legal requirements',
    },
    {
        imgSrc: "/assets/provide/heaking.svg",
        country: "Eco-Friendly Recycling",
        paragraph: 'Sustainable disposal with up to 95% material recovery rate',
    },
    {
        imgSrc: "/assets/provide/uidesign.svg",
        country: "Parts Recovery",
        paragraph: 'Careful dismantling and recycling of valuable vehicle components',
    },
]


const Provide = () => {
    return (
        <div id="services" className="bg-black text-white">

            <div className='mx-auto max-w-7xl px-4 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>

                    {/* COLUMN-1 */}
                    <div className='col-span-6 flex justify-center'>
                        <div className="flex flex-col align-middle justify-center p-10">
                            <p className="text-4xl lg:text-6xl pt-4 font-semibold lh-81 mt-5 text-center lg:text-start">Professional Vehicle Disposal Services</p>
                            <h4 className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-white/80">
                                Black Mining provides comprehensive end-of-life vehicle solutions with a focus on environmental sustainability and maximum value recovery. Our certified team ensures safe, legal, and efficient vehicle disposal while meeting all environmental regulations.
                            </h4>
                            <Link href={'/'} className="mt-4 text-xl font-medium text-blue flex gap-2 mx-auto lg:mx-0 space-links">Our Process <Image src={'/assets/provide/arrow.svg'} alt={'arrow'} width={20} height={20} /></Link>
                        </div>
                    </div>

                    <div className='lg:col-span-1'></div>

                    {/* COLUMN-2 */}
                    <div className='col-span-6 lg:col-span-5'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 lg:gap-x-40 px-10 py-12 bg-bluebg rounded-3xl'>
                            {Aboutdata.map((item, i) => (
                                <div
                                    key={i}
                                    className='bg-white text-black rounded-3xl lg:-ml-32 p-6 shadow-xl 
                                        transform transition-all duration-300 ease-in-out
                                        hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br 
                                        hover:from-white hover:to-blue-50 
                                        group cursor-pointer'
                                >
                                    <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                                        <Image
                                            src={item.imgSrc}
                                            alt={item.imgSrc}
                                            width={64}
                                            height={64}
                                            className="mb-5 transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <h4 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 
                                            transition-colors duration-300">
                                            {item.country}
                                        </h4>
                                        <h4 className='text-lg font-normal text-black/80 my-2 
                                            transition-all duration-300 group-hover:text-black'>
                                            {item.paragraph}
                                        </h4>
                                    </div>

                                    {/* Animated border effect */}
                                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
                                        transition-opacity duration-300 pointer-events-none"
                                        style={{
                                            background: 'linear-gradient(45deg, #3b82f6, #10b981, #6366f1)',
                                            filter: 'blur(8px)',
                                            transform: 'scale(1.02)',
                                            zIndex: -1
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Trust & Certification Section */}
            <div className="mt-20 pb-16 px-4">
                <h2 className="text-3xl font-bold text-center text-white mb-12">
                    Authorized & Certified Vehicle Scrapping Center
                </h2>

                {/* Certification Logos */}
                <div className="flex flex-wrap justify-center gap-8 mb-16">
                    {[
                        {
                            src: "https://cdn-icons-png.flaticon.com/512/9665/9665103.png",
                            alt: "ISO 9001:2015",
                            text: "ISO 9001:2015 Certified"
                        },
                        {
                            src: "https://cdn-icons-png.flaticon.com/512/4300/4300059.png",
                            alt: "MORTH Approved",
                            text: "MORTH Approved"
                        },
                        {
                            src: "https://cdn-icons-png.flaticon.com/512/1184/1184437.png",
                            alt: "CPCB Compliant",
                            text: "CPCB Compliant"
                        },
                        {
                            src: "https://cdn-icons-png.flaticon.com/512/2037/2037339.png",
                            alt: "Pollution Control",
                            text: "Pollution Control Board Authorized"
                        }
                    ].map((cert, index) => (
                        <div key={index} className="flex flex-col items-center group">
                            <div className="w-24 h-24 bg-white/10 rounded-full p-4 backdrop-blur-sm
                                transform transition-all duration-300 group-hover:scale-110">
                                <Image
                                    src={cert.src}
                                    alt={cert.alt}
                                    width={64}
                                    height={64}
                                    className="w-full h-full object-contain"
                                    unoptimized={true}
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.onerror = null;
                                        target.src = 'https://cdn-icons-png.flaticon.com/512/1055/1055645.png'; // Generic certification icon as fallback
                                    }}
                                />
                            </div>
                            <span className="mt-3 text-white/80 text-sm">{cert.text}</span>
                        </div>
                    ))}
                </div>

                {/* Key Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {[
                        {
                            icon: "🏆",
                            title: "Authorized Center",
                            description: "Government recognized vehicle scrapping facility"
                        },
                        {
                            icon: "📄",
                            title: "De-registration Support",
                            description: "Complete RTO paperwork assistance"
                        },
                        {
                            icon: "♻️",
                            title: "95% Recovery Rate",
                            description: "Industry-leading material recycling efficiency"
                        },
                        {
                            icon: "🌿",
                            title: "Eco-Friendly Process",
                            description: "Zero environmental impact disposal methods"
                        },
                        {
                            icon: "⚖️",
                            title: "Fair Value",
                            description: "Transparent pricing based on market rates"
                        },
                        {
                            icon: "🔒",
                            title: "Data Security",
                            description: "Secure handling of vehicle documentation"
                        },
                        {
                            icon: "🚛",
                            title: "Free Towing",
                            description: "Complimentary vehicle pickup service"
                        },
                        {
                            icon: "📱",
                            title: "Digital Process",
                            description: "End-to-end online tracking system"
                        }
                    ].map((feature, index) => (
                        <div key={index}
                            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 
                                transform transition-all duration-300 hover:bg-white/10 
                                hover:scale-105 hover:shadow-xl border border-white/10"
                        >
                            <span className="text-4xl mb-4 block">{feature.icon}</span>
                            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                            <p className="text-white/70">{feature.description}</p>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    )
}

export default Provide;

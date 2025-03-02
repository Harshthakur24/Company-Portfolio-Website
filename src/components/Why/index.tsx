"use client"
import Image from "next/image";

interface whydata {
    heading: string;
    subheading: string;
}

const whydata: whydata[] = [
    {
        heading: "Expert Valuation",
        subheading: "Professional assessment of your vehicle's worth, ensuring you receive the best market value for your end-of-life vehicle.",
    },
    {
        heading: "Legal Compliance",
        subheading: "Complete handling of all documentation and compliance with environmental regulations for safe and legal vehicle disposal.",
    },
    {
        heading: "Eco-Friendly",
        subheading: "Sustainable recycling practices with up to 95% material recovery rate, minimizing environmental impact through proper disposal.",
    }
]


const Why = () => {
    return (
        <div id="about" className="bg-black text-white pt-16">

            <div className='mx-auto max-w-7xl px-4 md:-mt-16 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>

                    {/* COLUMN-1 */}
                    <div className="lg:-ml-64">
                        <Image
                            src="/carimg.jpg"
                            alt="iPad-image"
                            width={800}
                            height={2000}
                            className="rounded-3xl h-[300px] md:h-[500px] lg:h-[700px] object-cover"
                        />
                    </div>

                    {/* COLUMN-2 */}
                    <div>
                        <h3 className="text-4xl lg:text-5xl pt-4 font-semibold sm:leading-tight mt-5 text-center lg:text-start">Why we best?</h3>
                        <h4 className="text-lg pt-4 font-normal sm:leading-tight text-center text-white/80 lg:text-start">Dont waste time on search manual tasks. Let Automation do it for you. Simplify workflows, reduce errors, and save time.</h4>

                        <div className="mt-10">
                            {whydata.map((items, i) => (
                                <div className="flex mt-4" key={i}>
                                    <div className="rounded-full h-10 w-36 md:w-20 flex items-center justify-center bg-circlebg">
                                        <Image src="/assets/why/check.svg" alt="check-image" width={24} height={24} />
                                    </div>
                                    <div className="ml-5">
                                        <h4 className="text-2xl font-semibold">{items.heading}</h4>
                                        <h5 className="text-lg text-white/80 font-normal mt-2">{items.subheading}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Why;

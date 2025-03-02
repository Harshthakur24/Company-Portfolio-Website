"use client"
import Image from 'next/image';

interface cardDataType {
    imgSrc: string;
    heading: string;
    percent: string;
    subheading: string;
}

const cardData: cardDataType[] = [
    {
        imgSrc: '/assets/buyers/ourbuyers.svg',
        percent: '10k+',
        heading: "Vehicles Processed",
        subheading: "Successfully processed and recycled vehicles since our founding.",
    },
    {
        imgSrc: '/assets/buyers/projectcompleted.svg',
        percent: '95%',
        heading: "Recovery Rate",
        subheading: "Of vehicle materials successfully recycled and repurposed.",
    },
    {
        imgSrc: '/assets/buyers/happybuyers.svg',
        percent: '98%',
        heading: "Client Satisfaction",
        subheading: "Positive feedback from our vehicle disposal services.",
    },
    {
        imgSrc: '/assets/buyers/teammembers.svg',
        percent: '20+',
        heading: "Years Experience",
        subheading: "Providing professional vehicle disposal solutions.",
    }
]

const Buyers = () => {
    return (
        <div className='hidden md:block mx-auto max-w-7xl py-8 pt-12 px-6 bg-black text-white'>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5 bg-gradient-to-b from-gray-900 to-gray-950'>
                {cardData.map((items, i) => (
                    <div className='flex flex-col justify-center items-center' key={i}>
                        <div className='flex justify-center border border-border p-2 w-10 rounded-lg'>
                            <Image src={items.imgSrc} alt={items.imgSrc} width={30} height={30} />
                        </div>
                        <h2 className='text-4xl lg:text-6xl text-white font-semibold text-center mt-5'>{items.percent}</h2>
                        <h3 className='text-2xl text-white font-semibold text-center lg:mt-6'>{items.heading}</h3>
                        <p className='text-lg font-normal text-white text-center text-opacity-50 mt-2'>{items.subheading}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Buyers;

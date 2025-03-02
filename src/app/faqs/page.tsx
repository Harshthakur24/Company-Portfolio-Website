"use client"
import { motion } from "framer-motion"
import { useState } from "react"

// FAQ data
const faqs = [
    {
        question: "What services does Black Mining offer?",
        answer: "We offer complete vehicle disposal services including free vehicle collection, legal documentation handling, and environmentally responsible vehicle processing. We ensure all vehicles are disposed of in compliance with environmental regulations."
    },
    {
        question: "How do I get started with disposing of my vehicle?",
        answer: "Simply fill out our contact form with your vehicle details and contact information, or call us directly. We'll arrange a convenient time to collect your vehicle and handle all the necessary paperwork."
    },
    {
        question: "Is your vehicle collection service free?",
        answer: "Yes, we offer free vehicle collection from your location. Our team will come to pick up your vehicle at a time that suits you, whether it's at your home, workplace, or another location."
    },
    {
        question: "What documents do I need to provide?",
        answer: "You'll need to provide your vehicle registration document (V5C), photo ID, and proof of address. We'll guide you through the documentation process and ensure everything is handled legally."
    },
    {
        question: "How long does the process take?",
        answer: "The entire process typically takes 24-48 hours from initial contact to vehicle collection. The actual collection usually takes about 30 minutes, and we handle all paperwork promptly."
    },
    {
        question: "Is your service environmentally friendly?",
        answer: "Yes, we follow strict environmental guidelines in our disposal process. We recycle as many parts as possible and ensure hazardous materials are disposed of properly in accordance with environmental regulations."
    },
    {
        question: "Do you handle all types of vehicles?",
        answer: "Yes, we handle cars, vans, trucks, and other vehicles regardless of their condition. Whether your vehicle is damaged, non-running, or end-of-life, we can help with its disposal."
    },
    {
        question: "Will I receive payment for my vehicle?",
        answer: "Yes, we offer competitive rates based on your vehicle's condition and current market values. We provide free, no-obligation quotes and immediate payment upon collection."
    },
    {
        question: "Are you legally certified for vehicle disposal?",
        answer: "Yes, we are fully licensed and certified for vehicle disposal. We comply with all relevant regulations and provide official documentation for every vehicle we process."
    }
]

function FaqItem({ question, answer, isOpen, onClick }: {
    question: string
    answer: string
    isOpen: boolean
    onClick: () => void
}) {
    return (
        <motion.div
            initial={false}
            className="border-b border-white last:border-b-0"
            whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.01)' }}
        >
            <button
                onClick={onClick}
                className="flex justify-between items-center w-full text-white py-6 text-left group transition-colors duration-200"
            >
                <span className="text-xl font-medium text-white group-hover:text-blue-600 transition-colors duration-200">
                    {question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className="ml-6 p-2 rounded-full bg-gray-100 group-hover:bg-blue-100 transition-colors duration-200"
                >
                    <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        className={`transform transition-colors duration-200 ${isOpen ? 'text-blue-600' : 'text-gray-600'}`}
                    >
                        <path
                            d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
                            fill="currentColor"
                            fillRule="evenodd"
                        />
                    </svg>
                </motion.div>
            </button>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                }}
                className="overflow-hidden"
            >
                <p className="pb-6 text-white/80 text-lg leading-relaxed pr-8">
                    {answer}
                </p>
            </motion.div>
        </motion.div>
    )
}

export default function FaqsPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <main className="min-h-screen py-16 px-4 bg-black mb-56 mt-2" style={{
            backgroundImage: 'url("/cccoil.svg")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundColor: 'black'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
            >
                <div className="text-center mb-4">
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Frequently Asked Questions
                    </motion.h1>
                    <motion.p
                        className="text-md md:text-xl text-white/80"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Find answers to common questions about our services
                    </motion.p>
                </div>

                <motion.div
                    className="bg-black rounded-2xl shadow-xl p-8 divide-y divide-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    {faqs.map((faq, index) => (
                        <FaqItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </main>
    )
}
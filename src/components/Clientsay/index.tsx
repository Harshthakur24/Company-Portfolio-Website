"use client"
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
    {
        quote: "The service was exceptional! They handled my vehicle disposal with utmost professionalism and care. The entire process was smooth and transparent.",
        author: "Ankush Choudhary",
        position: "Business Owner",
        image: "/t1.jpg"
    },
    {
        quote: "I was impressed by their commitment to environmental sustainability. They ensured every recyclable part was properly processed.",
        author: "Shreya Singh",
        position: "Fleet Manager",
        image: "/t2.jpg"
    },
    {
        quote: "Quick, efficient, and professional. Their team made what could have been a complex process incredibly simple and straightforward.",
        author: "Shivani Kapoor",
        position: "Car Dealer",
        image: "/t3.jpg"
    }
];

const Clientsay = () => {
    return (
        <div className="py-16 mb-24 pb-24 bg-black text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >

                    <p className="text-4xl text-gray-600 max-w-2xl mx-auto">
                        Trusted by thousands of vehicle owners for safe and reliable disposal services.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-black text-white">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-navyblue text-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex items-center mb-6">
                                <div className="relative w-16 h-16 mr-4">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.author}
                                        fill
                                        className="rounded-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900">
                                        {testimonial.author}
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        {testimonial.position}
                                    </p>
                                </div>
                            </div>

                            <div className="relative flex flex-col">
                                <svg
                                    className="absolute -top-2 -left-2 w-8 h-8 text-gray-200"
                                    fill="currentColor"
                                    viewBox="0 0 32 32"
                                    aria-hidden="true"
                                >
                                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                </svg>
                                <p className="mt-6 relative text-gray-700 italic leading-relaxed">
                                    {testimonial.quote}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Clientsay;

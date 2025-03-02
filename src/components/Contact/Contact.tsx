"use client"
import { useState, FormEvent } from 'react';
import Image from "next/image";
import toast from 'react-hot-toast';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Show loading toast
        const loadingToast = toast.loading('Sending...', {
            style: {
                background: 'white',
                color: '#333',
                padding: '16px',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            },
        });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ownerName: formData.name,
                    email: formData.email,
                    phoneNumber: 'N/A', // Required field in schema
                    formSource: 'footer'
                }),
            });

            if (response.ok) {
                toast.dismiss(loadingToast);
                toast.success('Message sent successfully!', {
                    duration: 5000,
                    style: {
                        background: 'white',
                        padding: '16px',
                        borderRadius: '10px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    }
                });
                setFormData({ name: '', email: '' });
            } else {
                toast.dismiss(loadingToast);
                toast.error('Failed to send message', {
                    style: {
                        background: 'white',
                        color: '#ef4444',
                        padding: '16px',
                        borderRadius: '10px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    },
                });
            }
        } catch (error) {
            toast.dismiss(loadingToast);
            toast.error('Something went wrong', {
                style: {
                    background: 'white',
                    color: '#ef4444',
                    padding: '16px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                },
            });
        }
    };

    return (
        <div className='-mt-32 mb-32 relative z-3' id="contact2">
            <div className="mx-auto max-w-2xl lg:max-w-7xl bg-blue-500 rounded-3xl">
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 lg:grid-cols-2 xl:gap-x-8">

                    {/* COLUMN-1 */}
                    <div className='hidden lg:block'>
                        <div className='float-right pt-20 relative'>
                            <Image src={'/assets/newsletter/bgImage.png'} alt="bgimg" width={588} height={334} />
                            <div className="absolute top-10 right-0">
                                <Image src={'/assets/newsletter/leaf.svg'} alt="leafimg" width={81} height={81} />
                            </div>
                            <div className="absolute bottom-8 left-2">
                                <Image src={'/assets/newsletter/circel.svg'} alt="circleimg" width={30} height={30} />
                            </div>
                        </div>
                    </div>

                    {/* COLUMN-2 */}
                    <div className="p-10 flex flex-col justify-center">
                        <h3 className="text-4xl md:text-5xl font-semibold mb-3 text-white">Contact Us Now</h3>
                        <h4 className="text-base font-normal mb-7 text-offwhite">
                            Ready for professional vehicle disposal? Get in touch for a free valuation.
                            We handle all paperwork and provide compliant, eco-friendly solutions.
                        </h4>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="flex gap-0">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                    className="py-4 text-sm w-full text-black bg-white rounded-l-lg pl-4"
                                    placeholder="Your name"
                                    required
                                />
                                <div
                                    className="items-center bg-midblue text-white font-medium py-2 px-4 rounded-r-lg"
                                >
                                    <Image src={'/assets/newsletter/plane.svg'} alt="send-icon" width={20} height={20} className='mt-2' />
                                </div>
                            </div>

                            <div className="flex gap-0">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                    className="py-4 text-sm w-full text-black bg-white rounded-l-lg pl-4"
                                    placeholder="Your email address"
                                    required
                                />
                                <div
                                    className="items-center bg-midblue text-white font-medium py-2 px-4 rounded-r-lg"
                                >
                                    <Image src={'/assets/newsletter/plane.svg'} alt="send-icon" width={20} height={20} className='mt-2' />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-black text-white font-medium py-4 rounded-lg hover:bg-midblue transition-colors duration-300 mt-4"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact;
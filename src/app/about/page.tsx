"use client"
import { ContainerScroll } from "@/src/components/ui/container-scroll-animation"

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-2 bg-black w-full" style={{
            backgroundImage: 'url("/bbburst.svg")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundColor: 'black'
        }}>
            <h1 className="flex justify-center mt-16 text-5xl md:text-8xl text-white font-bold bg-clip-text">
                About Us
            </h1>
            <ContainerScroll
                titleComponent={
                    <></>
                }
            >
                <div className="p-4 md:p-16 bg-black text-white rounded-2xl w-full max-w-full mx-auto">
                    <div className="h-[85vh] overflow-y-auto pr-2 md:pr-4 space-y-8 
                        scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 
                        hover:scrollbar-thumb-gray-500 
                        scroll-smooth">
                        <p className="text-xl md:text-3xl leading-relaxed text-white">
                            We are pioneers in sustainable vehicle disposal, committed to transforming end-of-life vehicles into valuable resources while protecting our environment.
                        </p>

                        <p className="text-lg md:text-2xl leading-relaxed text-white">
                            With over two decades of experience, our team has processed more than 10,000 vehicles, maintaining a remarkable 95% recovery rate.
                        </p>

                        <p className="text-lg md:text-2xl leading-relaxed text-white">
                            Our state-of-the-art facilities and expert team work together to provide comprehensive solutions that benefit both our clients and the environment. We believe in transparency, sustainability, and excellence in everything we do.
                        </p>
                    </div>
                </div>
            </ContainerScroll>
        </main>
    )
}
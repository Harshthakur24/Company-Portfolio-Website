"use client"
import { FocusCards } from "@/src/components/ui/focus-cards"
import { galleryCards } from "./data"
import { AnimatedTestimonials } from "@/src/components/ui/animated-testimonials"
import { testimonials } from "./data"

export default function GalleryPage() {
    return (

        <main className="min-h-screen pt-12 px-4 mb-56" style={{
            backgroundImage: 'url("/sq.svg")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundColor: 'black'
        }}>
            <div className="text-center mb-12">
                <h1 className="text-7xl md:text-8xl font-bold text-white">Our Gallery</h1>
                <p className="text-gray-600 mt-2 text-white">Check out our latest projects</p>
            </div>
            <FocusCards cards={galleryCards} />
            <AnimatedTestimonials testimonials={testimonials} />
        </main>
    )
}

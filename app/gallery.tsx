'use client'

import Masonry from 'react-masonry-css'

const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
}

const images = [
    { src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85', alt: 'Restrained contemporary home framed by its landscape' },
    { src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1000&q=85', alt: 'Close view of a quiet, light-filled interior' },
    { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85', alt: 'Sunlight settling into a softly textured interior' },
    { src: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1000&q=85', alt: 'Sculptural exterior lines against an open sky' },
    { src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1000&q=85', alt: 'Minimal white home seen through a leafy foreground' },
    { src: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1000&q=85', alt: 'Natural textures and considered furniture in a modest interior' }
]

export default function Gallery() {
    return (
        <section id="gallery">
            <h6 className="text-[10px] tracking-[1.8px] jetbrains-mono-500 text-[#00789F] mb-2">
                FROM THE NOTEBOOK
            </h6>
            <h1 className="text-[30px] leading-none cormorant-garamond-300">
                Details, places, passing light
            </h1>

            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid border-t-1 border-black/20 pt-8 mt-4"
                columnClassName="my-masonry-grid_column"
            >
                {images.map((image) => (
                    <figure className="grid-item" key={image.src}>
                        <img
                            className="saturate-0 hover:saturate-100 transition-all w-full"
                            src={image.src}
                            alt={image.alt}
                        />
                    </figure>
                ))}
            </Masonry>
        </section>
    )
}

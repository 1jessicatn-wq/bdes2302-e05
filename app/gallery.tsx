'use client'

import Masonry from 'react-masonry-css'
const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
};
export default function Gallery() {
    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
        >

        </Masonry>
    );
}

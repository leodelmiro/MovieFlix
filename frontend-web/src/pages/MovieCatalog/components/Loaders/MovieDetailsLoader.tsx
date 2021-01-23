import React from "react";
import ContentLoader from 'react-content-loader'

const MovieDetailsLoader = () => {
    return (
        <ContentLoader
            speed={2}
            width={1170}
            height={375}
            viewBox="0 0 1170 375"
            backgroundColor="#6c6c6c"
            foregroundColor="#525252"
        >

            <rect x="0" y="0" rx="10" ry="10" width="1170" height="375" />
        </ContentLoader>

    )
}

export default MovieDetailsLoader;
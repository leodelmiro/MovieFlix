import React from "react";
import ContentLoader from 'react-content-loader'
import { generateList } from "../../../../core/utils/list"

const MovieCardLoader = () => {
    const loaderItems = generateList(4);

    return (
        <>
            {loaderItems.map(item => (
                <ContentLoader
                    key={item}
                    speed={2}
                    width={270}
                    height={335}
                    viewBox="0 0 270 335"
                    backgroundColor="#6c6c6c"
                    foregroundColor="#525252"
                >

                    <rect x="0" y="0" rx="10" ry="10" width="270" height="330" />
                </ContentLoader>
            ))}
        </>
    )
}

export default MovieCardLoader;
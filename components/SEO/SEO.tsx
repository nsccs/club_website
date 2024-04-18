import React from "react";
import Head from "next/head";

import ClubLogo from "@/img/CS_Club_Logo_Blue.png";

const SEO: React.FC<{
    title?: string;
    url?: string;
    description?: string;
    image?: {
        url: string;
        width?: number;
        height?: number;
        alt?: string;
        large?: boolean;
    };
}> = ({ title, url, description, image }) => {
    // We'll provide default values and use null only if it was explicitly set to null.
    // Then, we'll only not add a tag if our new value is null.
    const newTitle = title === undefined ? "NSC Computer Science Club" : title;
    const newURL = url || null;
    const newDescription =
        description === undefined
            ? "Welcome to the North Seattle College CS Club! We're a group of people on campus with a passion for Computer Science. The club is open to people of all skill levels, and we don't have any attendance or participation requirements. Join today!"
            : description;
    const newImage = image?.url === undefined ? ClubLogo.src : image.url;
    const newImageWidth =
        image?.url === undefined
            ? ClubLogo.width
            : image?.width === undefined || image?.height === undefined
              ? null
              : image.width;
    const newImageHeight =
        image?.url === undefined
            ? ClubLogo.height
            : image?.width === undefined || image?.height === undefined
              ? null
              : image.height;
    const newImageLarge =
        image?.url === undefined ? true : image.large || false;
    const newImageAlt =
        image?.url === undefined || image?.alt === undefined
            ? 'An image with a rubber ducky and the text "NSC Computer Science Club".'
            : image.alt;

    return (
        <>
            <Head>
                {newTitle && (
                    <>
                        <title>{newTitle}</title>

                        <meta property="og:title" content={newTitle} />
                        <meta name="twitter:title" content={newTitle} />
                    </>
                )}

                {newURL && (
                    <>
                        <link rel="canonical" href={newURL} />

                        <meta property="og:url" content={newURL} />
                    </>
                )}

                {newDescription && (
                    <>
                        <meta name="description" content={newDescription} />

                        <meta
                            property="og:description"
                            content={newDescription}
                        />
                        <meta
                            name="twitter:description"
                            content={newDescription}
                        />
                    </>
                )}

                {newImage && (
                    <>
                        <meta property="og:image" content={newImage} />
                        <meta name="twitter:image" content={newImage} />
                    </>
                )}

                {newImage && newImageWidth && (
                    <meta
                        property="og:image:width"
                        content={newImageWidth.toString()}
                    />
                )}
                {newImage && newImageHeight && (
                    <meta
                        property="og:image:height"
                        content={newImageHeight.toString()}
                    />
                )}

                {newImage && newImageAlt && (
                    <>
                        <meta property="og:image:alt" content={newImageAlt} />

                        <meta name="twitter:image:alt" content={newImageAlt} />
                    </>
                )}

                {newImage && newImageLarge && (
                    <>
                        <meta name="robots" content="max-image-preview:large" />

                        <meta
                            name="twitter:card"
                            content="summary_large_image"
                        />
                    </>
                )}

                <meta property="og:locale" content="en_US" />
                <meta
                    property="og:site_name"
                    content="NSC Computer Science Club"
                />
            </Head>
        </>
    );
};

export default SEO;

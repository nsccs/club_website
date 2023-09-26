import React from "react";
import Head from "next/head";

const SEO: React.FC<{
    title?: string;
    url?: string;
    description?: string;
}> = ({ title, url, description }) => {
    // We'll provide default values and use null only if it was explicitly set to null.
    // Then, we'll only not add a tag if our new value is null.
    const newTitle = title === undefined ? "NSC Computer Science Club" : title;
    const newURL = url || null;
    const newDescription =
        description === undefined
            ? "Welcome to the North Seattle College CS Club! We're a group of people on campus with a passion for Computer Science. The club is open to people of all skill levels, and we don't have any attendance or participation requirements. Join today!"
            : description;

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

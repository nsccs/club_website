import ClubLogo from "@/img/CS_Club_Logo_Blue.png";
import { Metadata } from "next";

export const getMetadata = ({
    title,
    url,
    description,
    image,
}: {
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
}): Metadata => {
    // We'll provide default values and use null only if it was explicitly set to null.
    // Then, we'll only not add a tag if our new value is null.
    const newTitle = title === undefined ? "NSC Computer Science Club" : title;
    const newURL = url || undefined;
    const newDescription =
        description === undefined
            ? "Welcome to the North Seattle College CS Club! We're a group of people on campus with a passion for Computer Science. The club is open to people of all skill levels, and we don't have any attendance or participation requirements. Join today!"
            : description;
    const newImage = image?.url === undefined ? ClubLogo.src : image.url;
    const newImageWidth =
        image?.url === undefined
            ? ClubLogo.width
            : image?.width === undefined || image?.height === undefined
              ? undefined
              : image.width;
    const newImageHeight =
        image?.url === undefined
            ? ClubLogo.height
            : image?.width === undefined || image?.height === undefined
              ? undefined
              : image.height;
    const newImageLarge =
        image?.url === undefined ? true : image.large || false;
    const newImageAlt =
        image?.url === undefined || image?.alt === undefined
            ? 'An image with a rubber ducky and the text "NSC Computer Science Club".'
            : image.alt;

    return {
        alternates: {
            canonical: newURL,
        },
        title: newTitle,
        openGraph: {
            url: newURL,
            title: newTitle,
            description: newDescription,
            images: [
                {
                    url: newImage,
                    width: newImageWidth,
                    height: newImageHeight,
                    alt: newImageAlt,
                },
            ],
            locale: "en_US",
            siteName: "NSC Computer Science Club",
        },
        twitter: {
            title: newTitle,
            images: [
                {
                    url: newImage,
                    width: newImageWidth,
                    height: newImageHeight,
                    alt: newImageAlt,
                },
            ],
            description: newDescription,
            ...(newImageLarge ? { card: "summary_large_image" } : {}),
        },
        robots: {
            ...(newImageLarge ? { "max-image-preview": "large" } : {}),
        },
    };
};

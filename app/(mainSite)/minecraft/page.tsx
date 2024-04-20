import React from "react";
import Footer from "@/components/Footer/Footer";
import { getMetadata } from "@/lib/SEO";
import { PageBody } from "@/app/(mainSite)/minecraft/PageBody";

export const metadata = getMetadata({
    title: "Minecraft | NSC Computer Science Club",
    url: "https://northcs.org/minecraft",
});

const Minecraft = () => {
    return (
        <>
            <PageBody />
            <Footer brightBg={false} bg={"black"} />
        </>
    );
};

export default Minecraft;

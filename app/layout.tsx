import "../style/index.scss";
import { Metadata } from "next";
import Providers from "./providers";

export const metadata: Metadata = {
    title: "NSC Computer Science Club",
    description:
        "Welcome to the North Seattle College CS Club! We're a group of people on campus with a passion\
         for Computer Science. The club is open to people of all skill levels, and we don't have any\
          attendance or participation requirements. Join today!",

    icons: {
        icon: "/favicon.ico",
    },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
};

export default RootLayout;

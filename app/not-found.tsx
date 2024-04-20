import Image from "next/image";
import { css } from "@/styled-system/css";
import { Flex } from "@/styled-system/jsx";

import FourOFourImg from "@/public/img/Error_404.png";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const NotFoundPage = () => {
    return (
        <>
            <Header />

            <Flex flexDir="column" w="100%" h="100%">
                <Image
                    className={css({
                        maxW: "90%",
                        maxH: "90%",
                        w: "auto",
                        h: "auto",
                    })}
                    src={FourOFourImg}
                    alt="You got a 404"
                />
                <audio controls autoPlay src="/welcome_to_404.mp3"></audio>
            </Flex>

            <Footer />
        </>
    );
};
export default NotFoundPage;

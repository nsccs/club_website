import NorthSeattleCollege from "../public/North_Seattle_College_Logo_2.jpeg";
import Image from "next/image";

const HeroImage = () => {
    return (
        <Image
            src={NorthSeattleCollege}
            alt="Fill this when we get a proper image"
        />
    );
};

export default HeroImage;

import {
    Box,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
} from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import { CSSProperties } from "react";

const ViewableImage: React.FC<{
    daImage: StaticImageData;
    altText?: string;
    buttonStyle?: CSSProperties;
    imageTitle?: string;
}> = ({ daImage, altText, buttonStyle, imageTitle }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    altText = altText == null ? "A screenshot from the server" : altText;
    return (
        <>
            {/* image preview */}
            <button onClick={onOpen} style={buttonStyle}>
                <Box borderRadius="10px" overflow="hidden" marginX="10%">
                    <Image
                        src={daImage}
                        alt={altText}
                        style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            width: "auto",
                            height: "auto",
                        }}
                    />
                </Box>
            </button>

            {/* maximized image section */}
            <Modal
                closeOnOverlayClick={true}
                isOpen={isOpen}
                onClose={onClose}
                size="full"
            >
                <ModalOverlay backdropFilter="blur(20px)" />
                <ModalContent bgColor={"#FFFFFF00"}>
                    <ModalHeader color="white">{imageTitle}</ModalHeader>
                    <ModalCloseButton color="red" size="lg" />
                    <ModalBody>
                        <Box
                            borderRadius="20px"
                            overflow="hidden"
                            marginX="10%"
                            height="auto"
                            width="auto"
                        >
                            <Image
                                src={daImage}
                                alt={altText}
                                style={{
                                    display: "block",
                                    maxHeight: "100%",
                                    maxWidth: "100%",
                                    width: "100%",
                                    height: "auto",
                                }}
                            />
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ViewableImage;

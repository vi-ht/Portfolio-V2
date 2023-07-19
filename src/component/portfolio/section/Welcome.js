//import css
import "./../../../css/layout.css";
import "./../../../css/font.css";
import "./../../../css/scroll.css";
import "./../../../css/background.css";
//import hook
//import chakra UI component
import { Center, Flex } from "@chakra-ui/react";
//import image
import wavehand from "../../../asset/icon/twemojiwavinghand.png";
// import chakra components
import { Text, Box } from "@chakra-ui/react";
import { TextTemplate } from "../component/TextTemplate";
//----------------------------------------------------------

export default function Welcome({ bg, z, p }) {
    return (
        <Center
            w="full"
            bg={bg}
            bgSize="100%"
            overflow="hidden"
            position="fixed"
            zIndex={0}
            top={0}
        >
            <Center
                w={{
                    base: "90%", //0px
                    sm: "94%", // 480px
                    md: "86%", // 768px
                    lg: "94%", // 992px
                    xl: "80%", // 1280px
                    "2xl": "80rem", //1536px
                }}
                h="100vh"
            >
                <Flex
                    w="full"
                    alignItems="center"
                    justify="center"
                    direction="column"
                    mt={{
                        base: "65px", //0px
                        sm: "90px", // 480px
                        md: "100px", // 768px
                        lg: "100px", // 992px
                        xl: "110px", // 1280px
                        "2xl": "80px",
                    }}
                    mb={{
                        base: "45px", //0px
                        lg: "65px", //0px}
                    }}
                >
                    <Box w="full" h="full">
                        <Box id="box">
                            <Text
                                fontSize={{
                                    base: "50px", //0px
                                    sm: "60px", // 480px
                                    md: "70px", // 768px
                                    lg: "90px", // 992px
                                    xl: "100px", // 1280px
                                    "2xl": "100px", //1536px
                                }}
                                lineHeight={{
                                    base: "60px",
                                    sm: "70px",
                                    md: "80px",
                                    lg: "130px", //0px
                                }}
                                className="qs-smb"
                                id="auto-typing"
                            >
                                Nice to see you.
                            </Text>
                            <TextTemplate container>
                                <img
                                    src={wavehand}
                                    alt="wave-hand"
                                    className="wave-hand"
                                />
                                <span className="welcome-text qs-m">
                                    Welcome to my portfolio!{" "}
                                </span>
                            </TextTemplate>
                            <TextTemplate>
                                I’m{" "}
                                <span
                                    className="highlight qs-b"
                                    style={{ color: "black" }}
                                >
                                    Thanh Vi
                                </span>
                                , a little girl with a big passion for{" "}
                                <span className="highlight qs-b">
                                    Front-end web development
                                </span>{" "}
                                and
                                <span className="highlight qs-b">
                                    {" "}
                                    UX/UI Design
                                </span>
                                .
                            </TextTemplate>
                        </Box>
                    </Box>
                </Flex>
            </Center>
        </Center>
    );
}

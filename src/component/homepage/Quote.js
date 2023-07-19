//import css
import "./../../css/font.css";
import "./../../css/Color.css";
import "./../../css/paralax.css";
//import chakra UI component
import { Text, Center, Flex } from "@chakra-ui/react";
export default function Quote() {
    return (
        <Center w="full" position="relative">
            <Center
                w={{
                    base: "90%", //0px
                    sm: "94%", // 480px
                    md: "90%", // 768px
                    lg: "85%", // 992px
                    xl: "80%", // 1280px
                    "2xl": "90rem", //1536px
                }}
                h="100vh"
            >
                <Flex
                    w="full"
                    alignItems="center"
                    justify="center"
                    direction="column"
                >
                    <Text
                        color="white"
                        fontSize={{
                            base: "20px", //0px
                            sm: "22", // 480px
                            md: "22px", // 768px
                            lg: "25px", // 992px
                            xl: "25px", // 1280px
                            "2xl": "25px", //1536px
                        }}
                        lineHeight={{
                            base: "35px", //0px
                            md: "40px", // 768px
                            xl: "45px", // 1280px
                        }}
                        w={{
                            base: "290px", //0px
                            sm: "430px", // 480px
                            md: "600px", // 768px
                            lg: "800px", // 992px
                            xl: "900px", // 1280px
                            "2xl": "950px", //1536px
                        }}
                        textAlign="center"
                        position="relative"
                        className="qs-smb"
                    >
                        <span className="quote-content"></span>
                        "UI/UX self-learning process has many difficulties and
                        obstacles for a newbie like me, but I know that
                        persistence and responsibility for the initial goal are
                        the prerequisite factor for pursuing a big dream."{" "}
                    </Text>
                </Flex>
            </Center>

            <div className="paralax uiux">
                {/* <img
                src={bg}
                style={{
                    width: "100%",
                    height: "100vh",
                    objectFit: "cover",
                    objectPosition: "100% 43%",
                    position: "absolute",
                    zIndex: "-1",
                    top: "0",
                }}
                alt="learnUIUX"
            ></img> */}
            </div>
        </Center>
    );
}

//import css
import "./../css/layout.css";
import "./../css/font.css";
//import chakra UI component
import { Center, Flex } from "@chakra-ui/react";
//----------------------------------------------------------
export default function BgColorLayout({
    bgColor,
    children,
    page,
    mainpage,
    id,
}) {
    return (
        <Center w="full" bg={bgColor} bgSize="100%" mainpage id={id ? id : ""}>
            <Center
                w={{
                    base: "90%", //0px
                    sm: "94%", // 480px
                    md: "86%", // 768px
                    lg: "94%", // 992px
                    xl: "80%", // 1280px
                    "2xl": "80rem", //1536px
                }}
            >
                <Flex
                    w="full"
                    alignItems={mainpage ? "flex-start" : "center"}
                    justify={mainpage ? "flex-start" : "center"}
                    direction="column"
                    mt={
                        !page
                            ? {
                                  base: "65px", //0px
                                  sm: "90px", // 480px
                                  md: "100px", // 768px
                                  lg: "130px", // 992px
                              }
                            : {
                                  base: "65px", //0px
                                  sm: "90px", // 480px
                                  md: "100px", // 768px
                                  lg: "100px", // 992px
                                  xl: "110px", // 1280px
                                  "2xl": "80px",
                              }
                    }
                    mb={
                        !page
                            ? {
                                  base: "65px", //0px
                                  sm: "90px", // 480px
                                  md: "100px", // 768px
                                  lg: "130px", // 992px
                              }
                            : {
                                  base: "45px", //0px
                                  lg: "65px", //0px
                              }
                    }
                >
                    {children}
                </Flex>
            </Center>
        </Center>
    );
}

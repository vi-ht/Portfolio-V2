// import hook
import {  useEffect } from "react";
// import CSS
import "./../css/font.css";
import "./../css/Color.css";
import "./../css/layout.css";
// import chakraUI components
import { Text, Box, Flex, Spacer, Center } from "@chakra-ui/react";
// import component
import MobileDrawer from "./Drawer";
import { PATH } from "./../router/Path.js";
import { Link } from "react-router-dom";
//----------------------------------
export default function MobileHeader() {
    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            e.preventDefault();
            var pos = window.scrollY;
            const header = document.getElementById("mb-header");
            if (pos > 0) {
                header.style.backgroundColor = "white";
                header.style.boxShadow =
                    "0px 3px 7px 0px rgba(251, 121, 127, 0.3)";
                header.style.marginTop = "-10px";
            } else {
                document.getElementById("mb-header").style.backgroundColor =
                    "rgba(1,1,1,0)";
                header.style.boxShadow = "none";
                header.style.marginTop = "0px";
            }
        });
    }, []);
    return (
        <Center w="full" position="absolute" top="0" id="mb-header">
            <Flex
                w={{
                    base: "90%", //0px
                    sm: "94%", // 480px
                    md: "86%", // 768px
                    lg: "94%", // 992px
                    xl: "80%", // 1280px
                    "2xl": "80rem", //1536px
                }}
                display={{
                    base: "flex", //0px
                    sm: "flex", // 480px
                    md: "flex", // 768px
                    lg: "none", // 992px
                    xl: "none", // 1280px
                    "2xl": "none", //1536px
                }}
                mt={2}
                mb={-1}
                alignItems="center"
            >
                <Box>
                    <Link to={PATH.home}>
                        <Text
                            fontSize={{base: "2xl", lg:"4xl"}}
                            fontWeight={700}
                            className="qs-b main-color"
                            sx={{
                                transition: "0.5s",
                            }}
                            _hover={{
                                color: "black",
                            }}
                        >
                            Thanh Vi
                        </Text>
                    </Link>
                </Box>
                <Spacer />
                <Box p="4">
                    <MobileDrawer />
                </Box>
            </Flex>
        </Center>
    );
}

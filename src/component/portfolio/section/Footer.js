// import CSS
import "./../../../css/font.css";
import "./../../../css/Color.css";
import "./../../../css/layout.css";
import "./../../../css/animate.css";
import "./../../../css/portfolio-anim.css";
import { IconButton } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
// import chakraUI components
import { HStack, Box, Flex, Spacer, Center } from "@chakra-ui/react";
// import react-router-dom
import { CustomIcon, CustomTooltipIcon } from "../component/CustomIcon";
import { TextTemplate } from "../component/TextTemplate";
//-------------------------

export default function Footer() {
    return (
        <Center w="full" position="fixed" bottom="5px" id="footer" zIndex={100}>
            <Flex
                w={{
                    base: "90%", //0px
                    sm: "94%", // 480px
                    md: "86%", // 768px
                    lg: "94%", // 992px
                    xl: "80%", // 1280px
                    "2xl": "83rem", //1536px
                }}
                display={{
                    base: "none", //0px
                    sm: "none", // 480px
                    md: "none", // 768px
                    lg: "flex", // 992px
                    xl: "flex", // 1280px
                    "2xl": "flex", //1536px
                }}
                mt={4}
                mb={2}
                alignItems="center"
            >
                <Box>
                    <HStack gap={3}>
                        <CustomIcon
                            link="https://www.facebook.com/thanhviihuynh/"
                            iconName="basil:facebook-solid"
                        />
                        <CustomIcon
                            link="https://www.instagram.com/huynhthanhvii/"
                            iconName="basil:instagram-outline"
                        />
                        <CustomTooltipIcon
                            link=""
                            iconName="iconoir:send-mail"
                            label="thanhviii888@gmail.com"
                            w="270px"
                            pos="bottom"
                        />
                        <CustomIcon
                            link="https://www.linkedin.com/in/huynh-thi-thanh-vi-bbb51a18b/"
                            iconName="basil:linkedin-solid"
                        />
                        <CustomTooltipIcon
                            iconName="basil:phone-solid"
                            label="0377793371"
                            w="176px"
                            pos="bottom-end"
                        />
                    </HStack>
                </Box>
                <Spacer />
                <Box p="4">
                    <HStack justify="flex-end" gap="0px">
                        <IconButton
                            aria-label="Search database"
                            icon={
                                <Icon
                                    icon="solar:arrow-down-broken"
                                    width="32"
                                    height="32"
                                    id="scroll-down-icon"
                                />
                            }
                            borderRadius="50%"
                            bg="radial-gradient(50% 50.00% at 50% 50.00%, rgba(251, 121, 127, 0.3) 10%, rgba(217, 217, 217, 0.00) 100%)"
                            color="black"
                            w="75px"
                            height="75px"
                            _hover={{
                                color: "black",
                                backgroundColor: "white",
                            }}
                        />
                        <TextTemplate>
                            <span className=" qs-m">
                                Scroll down to see my work{" "}
                            </span>
                        </TextTemplate>
                    </HStack>
                </Box>
            </Flex>
        </Center>
    );
}

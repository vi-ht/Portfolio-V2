// import CSS
import "./../../../css/font.css";
import "./../../../css/Color.css";
import "./../../../css/layout.css";
import "./../../../css/animate.css";
import "./../../../css/portfolio-anim.css";
// import chakraUI components
import { VStack, Box, Center } from "@chakra-ui/react";
// import react-router-dom
import { CustomIcon, CustomTooltipIcon } from "../component/CustomIcon";
//-------------------------

export default function SlideBarLeft() {
    const w = (document.documentElement.clientWidth - 80 * 16) / 2 + "px";
    return (
        <Center
            id="footer"
            zIndex={100}
            position="absolute"
            left="0"
            w={{
                base: "90%", //0px
                sm: "94%", // 480px
                md: "86%", // 768px
                lg: w, // 992px
                xl: w, // 1280px
                "2xl": w, //1536px
            }}
        >
            <Box>
                <VStack gap={3}>
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
                </VStack>
            </Box>
        </Center>
    );
}

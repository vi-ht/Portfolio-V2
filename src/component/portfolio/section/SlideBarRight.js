// import CSS
import "./../../../css/font.css";
import "./../../../css/Color.css";
import "./../../../css/layout.css";
import "./../../../css/animate.css";
import "./../../../css/background.css";
// import chakraUI components
import { VStack, Box, Center, Text } from "@chakra-ui/react";
// import react-router-dom
import { TextTemplate } from "../component/TextTemplate";
//-------------------------

export default function SlideBarRight() {
    const w = (document.documentElement.clientWidth - 80 * 16) / 2 + "px";
    return (
        <Center
            zIndex={100}
            position="absolute"
            right="0"
            w={{
                base: "90%", //0px
                sm: "94%", // 480px
                md: "86%", // 768px
                lg: w, // 992px
                xl: w, // 1280px
                "2xl": w, //1536px
            }}
            mt="-20px"
        >
            <Box>
                <VStack gap={3}>
                    <div className="mark-title">
                        <Text fontSize="20px" className="qs-m">
                            About <span className="main-color qs-m">V</span>
                        </Text>
                    </div>
                    <div className="mark-outside active">
                        <div className="mark about-vi"> </div>
                    </div>
                    <div className="mark-outside ">
                        <div className="mark edu"></div>
                    </div>
                    <div className="mark-outside ">
                        <div className="mark exp"></div>
                    </div>
                    <div className="mark-outside ">
                        <div className="mark skill"></div>
                    </div>
                    <div className="mark-outside ">
                        <div className="mark"></div>
                    </div>
                    <div className="mark-outside ">
                        <div className="mark"></div>
                    </div>
                </VStack>
            </Box>
        </Center>
    );
}

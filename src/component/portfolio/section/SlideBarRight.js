// import CSS
import "./../../../css/font.css";
import "./../../../css/Color.css";
import "./../../../css/layout.css";
import "./../../../css/background.css";
// import chakraUI components
import { VStack, Box, Center, Text, IconButton } from "@chakra-ui/react";
//import iconify
import { Icon } from "@iconify/react";
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
                        <Text fontSize="18px" className="qs-m">
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
                        <div className="mark tech"></div>
                    </div>
                    <div className="mark-outside ">
                        <div className="mark"></div>
                    </div>
                    <div className="mark-outside ">
                        <div className="mark"></div>
                    </div>
                    <IconButton
                        aria-label="Search database"
                        icon={
                            <Icon
                                icon="solar:arrow-down-broken"
                                width="27"
                                height="27"
                                id="scroll-down-icon"
                            />
                        }
                        borderRadius="50%"
                        bg="radial-gradient(50% 50.00% at 50% 50.00%, rgba(251, 121, 127, 0.3) 10%, rgba(217, 217, 217, 0.00) 100%)"
                        color="black"
                        w="65px"
                        height="65px"
                        transform="rotate(180deg)"
                        _hover={{
                            color: "black",
                            background:
                                "radial-gradient(50% 50.00% at 50% 50.00%, rgba(251, 121, 127, 0.5) 10%, rgba(217, 217, 217, 0.00) 100%)",
                        }}
                    />
                </VStack>
            </Box>
        </Center>
    );
}

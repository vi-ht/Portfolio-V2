//import css
import "./../../../css/font.css";
import "./../../../css/scroll.css";
import "./../../../css/background.css";
//import hook
//import chakra UI component
import { Center, Flex } from "@chakra-ui/react";
//---------------------------------------------
export default function Layout({ children, id }) {
    return (
        <div className="scroller-child" id={id}>
            <Center
                w={{
                    base: "90%", //0px
                    sm: "94%", // 480px
                    md: "86%", // 768px
                    lg: "90%", // 992px
                    xl: "80%", // 1280px
                    "2xl": "81rem", //1536px
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
                    {children}
                </Flex>
            </Center>
        </div>
    );
}

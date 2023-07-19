//import css
import "./../../../css/layout.css";
import "./../../../css/font.css";
import "./../../../css/scroll.css";
import "./../../../css/background.css";
import "./../../../css/portfolio-anim.css";
//import hook
//import chakra UI component
import { Center, Flex, VStack } from "@chakra-ui/react";
//import image
// import chakra components
import { Text, Box } from "@chakra-ui/react";
import { Grid, GridItem, HStack, Spacer } from "@chakra-ui/react";
//import image
import Avatar from "../../../asset/icon/edu.png";
import { TextTemplate } from "../component/TextTemplate";
import Layout from "./Layout";
import EducationStage from "./EducationStage";
export default function Skill() {
    return (
        <Layout id="skill">
            <Grid
                w="100%"
                templateColumns="repeat(13, 1fr)"
                gap={{ base: 4, lg: 0 }}
                mt={{ base: 8, sm: 6, lg: 0 }}
            >
                <GridItem
                    colSpan={{ base: 13 }}
                    colStart={1}
                    // transform="translate(30px,0)"
                    // id="abme-right"
                >
                    <Center w="full" h="full">
                        <Box>
                            <HStack alignItems="center" justify="space-between">
                                <Text
                                    fontSize={{
                                        base: "50px", //0px
                                        sm: "65px", // 480px
                                        md: "70px", // 768px
                                        lg: "70px", // 992px
                                    }}
                                    // lineHeight={{
                                    //     base: "60px", //0px
                                    //     sm: "80px", // 480px
                                    //     md: "80px", // 768px
                                    //     lg: "90px", // 992px
                                    // }}
                                    // w={{
                                    //     base: "100%",
                                    //     lg: "60%",
                                    // }}
                                    // mb="50px"
                                    className="qs-smb"
                                >
                                    WHAT{" "}
                                    <span className="main-color qs-smb">
                                        VI
                                    </span>{" "}
                                    CAN DO?
                                </Text>
                                <Spacer/>
                                <Text textAlign="right" w="50%">
                                    These are web design templates I found from
                                    the Figma community of other UI/UX designers
                                    or self-designed by me, and I used them to{" "}
                                </Text>
                            </HStack>
                        </Box>
                    </Center>
                </GridItem>
                {/* <GridItem
                    colSpan={{ base: 13, lg: 6 }}
                    colStart={{ base: 1, lg: 8 }}
                    w="full"
                    mb={{ base: 2, sm: 4, md: 5, lg: 0 }}
                >
                    <Center w="full" h="full">
                        <Box
                            w="full"
                            h={{
                                base: "100%",
                                xl: "96%",
                                "2xl": "85%",
                            }}
                        >
                            <img
                                src={Avatar}
                                alt="Thanh Vi's avatar"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                    objectPosition: "100% 100%",
                                }}
                            ></img>
                        </Box>
                    </Center>
                </GridItem> */}
            </Grid>
        </Layout>
    );
}

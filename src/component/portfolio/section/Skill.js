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
import { TextTemplate, TitleTemplate } from "../component/TextTemplate";
import Layout from "./Layout";
import ProgressBar from "./ProgressBar";
export default function Skill() {
    return (
        <Layout id="skill">
            <Grid
                w="100%"
                templateColumns="repeat(12, 1fr)"
                gap={{ base: 4, lg: "2.5rem 4rem" }}
                mt={{ base: 8, sm: 6, lg: 0 }}
                p={5}
            >
                <GridItem
                    colSpan={{ base: 12 }}
                    colStart={1}
                    // transform="translate(30px,0)"
                    // id="abme-right"
                >
                    <Center w="full" h="full">
                        <Box>
                            <HStack alignItems="center" justify="space-between">
                                <TitleTemplate>
                                    What Can{" "}
                                    <span className="main-color qs-smb">
                                        Vi
                                    </span>{" "}
                                    Do?
                                </TitleTemplate>
                                <Spacer />
                                <Text textAlign="right" w="50%">
                                    These are web design templates I found from
                                    the Figma community of other UI/UX designers
                                    or self-designed by me, and I used them to{" "}
                                </Text>
                            </HStack>
                        </Box>
                    </Center>
                </GridItem>
                <GridItem
                    colSpan={{ base: 12, lg: 6 }}
                    colStart={1}
                    w="full"
                    mb={{ base: 2, sm: 4, md: 5, lg: 0 }}
                >
                    <Center w="full" h="full">
                        <Box w="full">
                            <Box position="relative" mb="20px" h="30px">
                                <div
                                    style={{
                                        borderRadius: "50px",
                                        background:
                                            "radial-gradient(50% 50.00% at 50% 50.00%, rgba(251, 121, 127, 0.20) 0%, rgba(217, 217, 217, 0.00) 100%)",
                                        width: "270px",
                                        height: "50px",
                                        display: "flex",
                                        // justifyContent: "center",
                                        // alignItems: "center",
                                        position: "absolute",
                                        left: "-30px",
                                        top: "-10px",
                                    }}
                                ></div>
                                <Text
                                    className="main-color qs-smb"
                                    fontSize="18px"
                                    position="absolute"
                                    left="0"
                                    top="0"
                                >
                                    Front-end Development
                                </Text>
                            </Box>
                            <ProgressBar
                                title="Convert PSD/Figma design to pixel-perfect UI"
                                percent="85%"
                            />
                            <ProgressBar
                                title="Working with REST/RESTful API for fetching data"
                                percent="60%"
                            />
                            <ProgressBar
                                title="Search engine optimization"
                                percent="70%"
                            />
                            <ProgressBar
                                title="Performance optimizing"
                                percent="50%"
                            />
                            <ProgressBar title="Animation" percent="65%" />
                            <ProgressBar title="Responsive" percent="90%" />
                        </Box>
                    </Center>
                </GridItem>
                <GridItem
                    colSpan={{ base: 12, lg: 6 }}
                    colStart={{ base: 1, lg: 7 }}
                    w="full"
                    mb={{ base: 2, sm: 4, md: 5, lg: 0 }}
                >
                    <Center w="full" h="full">
                        <Box w="full">
                            <Box position="relative" mb="20px" h="30px">
                                <div
                                    style={{
                                        borderRadius: "50px",
                                        background:
                                            "radial-gradient(50% 50.00% at 50% 50.00%, rgba(251, 121, 127, 0.2) 0%, rgba(217, 217, 217, 0.00) 100%)",
                                        width: "200px",
                                        height: "50px",
                                        display: "flex",
                                        position: "absolute",
                                        left: "-30px",
                                        top: "-10px",
                                    }}
                                ></div>
                                <Text
                                    className="main-color qs-smb"
                                    fontSize="18px"
                                    position="absolute"
                                    left="0"
                                    top="0"
                                >
                                    Web/App Design
                                </Text>
                            </Box>
                            <ProgressBar
                                title="Responsive Design"
                                percent="95%"
                            />
                            <ProgressBar title="Accessibility" percent="55%" />
                            <ProgressBar title="Storyboarding" percent="65%" />
                            <ProgressBar title="Wireframing" percent="66%" />
                            <ProgressBar title="Prototyping" percent="67%" />
                            <ProgressBar
                                title="Information Architecture / Sitemap"
                                percent="60%"
                            />
                        </Box>
                    </Center>
                </GridItem>
            </Grid>
        </Layout>
    );
}

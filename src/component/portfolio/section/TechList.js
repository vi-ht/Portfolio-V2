//import css
import "./../../../css/layout.css";
import "./../../../css/font.css";
import "./../../../css/scroll.css";
import "./../../../css/background.css";
//import chakra UI component
import { Grid, GridItem, HStack, Spacer, Center,Text, Box } from "@chakra-ui/react";
//import component
import { TitleTemplate } from "../component/TextTemplate";
import TechBox from "./TechBox";
import Layout from "./Layout";
//------------------------------------------
export default function TechList() {
    return (
        <Layout id="tech">
            <Grid
                w="100%"
                templateColumns="repeat(12, 1fr)"
                gap={{ base: 4, lg: "2.3rem 4rem" }}
                mt={{ base: 8, sm: 6, lg: -30 }}
                p="0 20px"
            >
                <GridItem colSpan={{ base: 12 }} colStart={1}>
                    <Center w="full" h="full">
                        <Box>
                            <HStack alignItems="center" justify="space-between">
                                <TitleTemplate>Technical</TitleTemplate>
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
                    colSpan={12}
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
                                    Programing Language
                                </Text>
                            </Box>
                            <HStack gap={5}>
                                <TechBox
                                    title="HTML"
                                    icon="akar-icons:html-fill"
                                />
                                <TechBox
                                    title="CSS"
                                    icon="akar-icons:css-fill"
                                />
                                <TechBox
                                    title="Javascript"
                                    icon="fa-brands:js-square"
                                />
                                <TechBox
                                    title="SASS/SCSS"
                                    icon="simple-icons:sass"
                                />
                            </HStack>
                        </Box>
                    </Center>
                </GridItem>
                <GridItem
                    colSpan={12}
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
                                        width: "250px",
                                        height: "50px",
                                        display: "flex",
                                        position: "absolute",
                                        left: "-40px",
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
                                    Framework / Library
                                </Text>
                            </Box>
                            <HStack gap={5}>
                                <TechBox
                                    title="ReactJS"
                                    icon="fontisto:react"
                                />
                                <TechBox
                                    title="Redux"
                                    icon="akar-icons:redux-fill"
                                />
                                <TechBox
                                    title="Axios"
                                    icon="simple-icons:axios"
                                />
                                <TechBox title="MUI" icon="simple-icons:mui" />
                                <TechBox
                                    title="Bootstrap"
                                    icon="simple-icons:bootstrap"
                                />
                                <TechBox
                                    title="ChakraUI"
                                    icon="simple-icons:chakraui"
                                />
                                <TechBox
                                    title="Jquery"
                                    icon="devicon-plain:jquery-wordmark"
                                />
                            </HStack>
                        </Box>
                    </Center>
                </GridItem>
                <GridItem
                    colSpan={{ base: 12, lg: 4 }}
                    colStart={4}
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
                                        width: "155px",
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
                                    Testing tools
                                </Text>
                            </Box>
                            <HStack gap={5}>
                                <TechBox title="Jest" icon="file-icons:jest" />
                                <TechBox
                                    title="Mocha"
                                    icon="devicon-plain:mocha"
                                />
                            </HStack>
                        </Box>
                    </Center>
                </GridItem>
                <GridItem
                    colSpan={{ base: 12, lg: 4 }}
                    colStart={{ base: 1, lg: 5 }}
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
                                        width: "160px",
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
                                    Design tools
                                </Text>
                            </Box>
                            <HStack gap={5}>
                                <TechBox
                                    title="Figma"
                                    icon="basil:figma-solid"
                                />
                                <TechBox
                                    title="AdobeXD"
                                    icon="simple-icons:adobexd"
                                />
                                <TechBox
                                    title="Photoshop"
                                    icon="simple-icons:adobephotoshop"
                                />
                            </HStack>
                        </Box>
                    </Center>
                </GridItem>
                <GridItem
                    colSpan={{ base: 12, lg: 4 }}
                    colStart={{ base: 1, lg: 9 }}
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
                                        width: "160px",
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
                                    Version control system
                                </Text>
                            </Box>
                            <HStack gap={5}>
                                <TechBox
                                    title="Git/GitHub"
                                    icon="fluent-mdl2:git-hub-logo"
                                />
                            </HStack>
                        </Box>
                    </Center>
                </GridItem>
            </Grid>
        </Layout>
    );
}
